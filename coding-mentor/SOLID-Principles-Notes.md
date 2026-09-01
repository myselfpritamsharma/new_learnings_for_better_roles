# SOLID Principles — Quick Reference & Examples

> Focus: Real-world patterns for system design interviews (Rate Limiter, Cache, Logger, etc.). These principles appear in LLD/HLD design decisions.

---

## 1. Single Responsibility Principle (SRP)

**Definition:** A class should have only one reason to change.

**Why:** Easier to test, maintain, and extend. If a class does multiple things, changes to one feature might break another.

### ❌ Bad Example (Violates SRP)

```python
class UserService:
    def register_user(self, email, password):
        # Validation logic
        if "@" not in email:
            return False
        
        # Database logic
        db.insert("users", {"email": email, "password": password})
        
        # Email sending logic
        send_email(email, "Welcome!")
        
        return True
```

**Problem:** This class has 3 reasons to change:
1. Validation logic changes
2. Database schema changes
3. Email service changes

### ✅ Good Example (Follows SRP)

```python
class UserValidator:
    def validate_email(self, email):
        return "@" in email

class UserRepository:
    def save_user(self, email, password):
        db.insert("users", {"email": email, "password": password})

class EmailService:
    def send_welcome_email(self, email):
        send_email(email, "Welcome!")

class UserService:
    def __init__(self, validator, repo, email_service):
        self.validator = validator
        self.repo = repo
        self.email_service = email_service
    
    def register_user(self, email, password):
        if not self.validator.validate_email(email):
            return False
        self.repo.save_user(email, password)
        self.email_service.send_welcome_email(email)
        return True
```

**Benefit:** Each class has one reason to change. Easier to unit test each piece.

---

## 2. Open/Closed Principle (OCP)

**Definition:** Classes should be open for extension, closed for modification.

**Why:** Add new features without breaking existing code.

### ❌ Bad Example (Violates OCP)

```python
class ReportGenerator:
    def generate_report(self, report_type):
        if report_type == "pdf":
            # PDF logic
            return "PDF Report"
        elif report_type == "csv":
            # CSV logic
            return "CSV Report"
        elif report_type == "json":
            # JSON logic
            return "JSON Report"
```

**Problem:** Every new report type requires modifying this class.

### ✅ Good Example (Follows OCP)

```python
from abc import ABC, abstractmethod

class ReportFormatter(ABC):
    @abstractmethod
    def format(self, data):
        pass

class PDFFormatter(ReportFormatter):
    def format(self, data):
        return "PDF Report"

class CSVFormatter(ReportFormatter):
    def format(self, data):
        return "CSV Report"

class ReportGenerator:
    def __init__(self, formatter: ReportFormatter):
        self.formatter = formatter
    
    def generate_report(self, data):
        return self.formatter.format(data)

# Adding new format (JSON) doesn't touch ReportGenerator
class JSONFormatter(ReportFormatter):
    def format(self, data):
        return "JSON Report"
```

**Benefit:** New formats extend the base class; no modification to `ReportGenerator`.

---

## 3. Liskov Substitution Principle (LSP)

**Definition:** Derived classes must be substitutable for their base class.

**Why:** Prevents bugs when using polymorphism. Subclasses shouldn't break the contract of the parent.

### ❌ Bad Example (Violates LSP)

```python
class Bird:
    def fly(self):
        return "Bird is flying"

class Penguin(Bird):
    def fly(self):
        raise Exception("Penguins can't fly!")  # Breaks the contract
```

**Problem:** Code expecting a `Bird` breaks when it gets a `Penguin`.

### ✅ Good Example (Follows LSP)

```python
class Animal(ABC):
    @abstractmethod
    def move(self):
        pass

class FlyingBird(Animal):
    def move(self):
        return "Flying"

class SwimmingBird(Animal):
    def move(self):
        return "Swimming"

class Penguin(SwimmingBird):
    def move(self):
        return "Swimming (penguin)"

# Code using Animal:
def make_animal_move(animal: Animal):
    return animal.move()  # Works for any Animal subclass
```

**Benefit:** No surprises. Any `Animal` subclass behaves as expected.

---

## 4. Interface Segregation Principle (ISP)

**Definition:** Clients should not be forced to depend on interfaces they don't use.

**Why:** Smaller, focused interfaces are easier to implement and maintain.

### ❌ Bad Example (Violates ISP)

```python
class DataProcessor(ABC):
    @abstractmethod
    def read(self):
        pass
    
    @abstractmethod
    def write(self):
        pass
    
    @abstractmethod
    def validate(self):
        pass
    
    @abstractmethod
    def transform(self):
        pass

class ReadOnlyCache(DataProcessor):
    def read(self):
        return "cached data"
    
    def write(self):
        raise NotImplementedError()  # Forced to implement, but doesn't use
    
    def validate(self):
        raise NotImplementedError()
    
    def transform(self):
        raise NotImplementedError()
```

**Problem:** `ReadOnlyCache` is forced to implement methods it doesn't need.

### ✅ Good Example (Follows ISP)

```python
class Reader(ABC):
    @abstractmethod
    def read(self):
        pass

class Writer(ABC):
    @abstractmethod
    def write(self):
        pass

class Validator(ABC):
    @abstractmethod
    def validate(self):
        pass

class ReadOnlyCache(Reader):
    def read(self):
        return "cached data"  # Only implements what it needs

class Database(Reader, Writer, Validator):
    def read(self):
        return "db data"
    
    def write(self, data):
        pass
    
    def validate(self):
        pass
```

**Benefit:** Classes implement only the interfaces they actually use.

---

## 5. Dependency Inversion Principle (DIP)

**Definition:** High-level modules should not depend on low-level modules. Both should depend on abstractions.

**Why:** Loose coupling. Easy to swap implementations (e.g., mock for testing).

### ❌ Bad Example (Violates DIP)

```python
class MySQLDatabase:
    def save(self, data):
        print(f"Saving to MySQL: {data}")

class UserService:
    def __init__(self):
        self.db = MySQLDatabase()  # Direct dependency on concrete class
    
    def create_user(self, user):
        self.db.save(user)
```

**Problem:** `UserService` is tightly coupled to `MySQLDatabase`. Hard to test or switch databases.

### ✅ Good Example (Follows DIP)

```python
class Database(ABC):
    @abstractmethod
    def save(self, data):
        pass

class MySQLDatabase(Database):
    def save(self, data):
        print(f"Saving to MySQL: {data}")

class PostgresDatabase(Database):
    def save(self, data):
        print(f"Saving to Postgres: {data}")

class UserService:
    def __init__(self, db: Database):  # Depends on abstraction
        self.db = db
    
    def create_user(self, user):
        self.db.save(user)

# Easy to swap:
service = UserService(MySQLDatabase())     # Real
test_service = UserService(MockDatabase()) # For testing
```

**Benefit:** Loosely coupled. Easy to test, swap implementations, or add new database types.

---

## SOLID in System Design Context

When designing Rate Limiter / Cache / Logger in interviews:

| Principle | Application | Interview Question Signal |
| --- | --- | --- |
| **SRP** | Each class does one thing: TokenBucket manages tokens, RateLimiter applies policy | "How would you extend this for multiple algorithms?" |
| **OCP** | New rate-limit algorithms don't modify core RateLimiter | "What if we add token-bucket, sliding-window, AND leaky-bucket?" |
| **LSP** | All RateLimitStrategy implementations behave consistently | "Can I swap different strategies without breaking code?" |
| **ISP** | Cache interface only has `get()` and `put()`, not `delete_all()` for read-only caches | "What operations does your interface expose?" |
| **DIP** | RateLimiter depends on abstract Storage, not concrete Redis | "How would you test this without a real Redis?" |

---

## Quick Self-Check

1. **SRP:** Does my class have more than one reason to change?
2. **OCP:** Can I add new features without modifying existing code?
3. **LSP:** Would a subclass break the parent's contract?
4. **ISP:** Am I forcing classes to implement unused methods?
5. **DIP:** Am I depending on abstractions, not concrete implementations?

---

## Your Task: Real Example from Your Codebase

**Think of a past project:**
- **Angular component** that does too much (validation + API call + storage)?
- **C# service** tightly coupled to a specific database?
- **Node.js route handler** that breaks when requirements change?

**Identify:** Which SOLID principle was violated? How would you refactor it?

Post your example when ready. 🎯
