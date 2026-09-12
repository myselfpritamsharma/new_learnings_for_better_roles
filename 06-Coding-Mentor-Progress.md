# Coding Mentor — Progress Tracker

> Maintained by the "Coding Mentor" agent. Updated after every session (problem attempt, review, mock interview, or contest). Do not hand-edit tables unless correcting a mistake — ask the agent to log entries instead.

---

## 1. Profile & Timeline

| Field | Value |
| --- | --- |
| Start Date | 2026-09-09 |
| Target Date (12 months) | 2027-09-09 |
| Daily available hours | 2-3 hours/day, structured as focused study + practice + review |
| Primary goal | GCC / Wall Street financial engineering role: Senior Software Engineer, SDE-3, Lead Engineer, or VP-track backend/platform engineer |
| Background | ~6 yrs full-stack (.NET Core, Angular, Node.js, SQL Server) |
| **Target Companies** | Goldman Sachs, JPMorgan Chase, Morgan Stanley, Citi, Barclays, Deutsche Bank, Wells Fargo, Amex, Walmart Global Tech, Target, and Citadel-style financial engineering teams |
| **Key Interview Lever** | GCC/fintech interviews reward backend depth: SQL Server performance, transaction integrity, concurrency, low-latency APIs, high availability, fault tolerance, secure engineering, observability, and pragmatic system design. DSA gates entry; design and production judgment win the level. |
| **Role Focus** | Senior Backend / Full-Stack Engineer (.NET Core + SQL Server + Node.js), Lead Engineer, VP-track engineering role, platform/integration engineer for mission-critical systems |
| **Language Strategy** | **Java is the immediate interview default** for DSA, CSES, LeetCode, LLD, mock interviews, and interview coding, aligned with GCC and investment-banking backend roles through Java/Spring Boot. **C#/.NET is the production-depth track** for CLR/GC, async/await, ASP.NET Core, concurrency, SQL Server, observability, and production architecture. System design, SQL/DBMS, Kafka, Redis, cloud/DevOps, security, and observability are shared foundations learned once. Angular is maintenance-only and below 10% of preparation. Previous Python solutions were removed for a clean restart. |
| **Senior-Level Emphasis** | At 6-7 YOE, interviews go beyond syntax into **multithreading/concurrency depth**: memory visibility (volatile/memory barriers), locks vs lock-free (CAS/atomics), thread pools, producer-consumer, deadlocks/livelock/starvation, coordination utilities (CountDownLatch/Semaphore/Barrier), event-driven architecture (Kafka/RabbitMQ delivery semantics), GC/latency tuning, and DB transaction isolation/locking. |
| **Competitive Programming Track** | Full current CSES Problem Set is loaded into the unified DSA checklist at startup and merged by topic with interview DSA. Solve all CSES tasks in Java with fast I/O, constraints-first reasoning, invariants, complexity proofs, edge-case testing, and post-submit failure analysis. |
| **Java Preparation Layers** | **DSA:** Java → collections → patterns → algorithms → timed problems. **LLD:** Java OOP → SOLID → patterns → concurrency → machine coding. **HLD:** Java/Spring Boot → APIs → SQL → Kafka → Redis → cloud → distributed systems → complete designs. C#/.NET remains the production-depth language; shared concepts are learned once. |

---

## 2. Curriculum Roadmap (Phase → Focus → Status)

> **Strategic Note:** This is a 12-month Goldman-or-better plan. Java is the interview and finance-market alignment language; C#/.NET is the production-depth language. DSA remains the first gate, while SQL/DBMS, concurrency, distributed systems, Spring Boot, ASP.NET Core, Kafka, Redis, cloud, observability, and system design build senior-engineer depth. Shared engineering concepts are learned once and applied across both ecosystems.

> **Language Checkpoint:** Use Java immediately for all new DSA, CSES, LLD, and interview-coding practice. Use the `.NET Production Guide` for C#/.NET runtime, ASP.NET Core, concurrency, SQL Server, observability, and architecture depth. Shared system-design, SQL, Kafka, Redis, cloud, security, and observability concepts are learned once. Keep Angular maintenance-only and below 10% of preparation.

> **Java syllabus order:** Core Java and OOP → collections and Big-O → strings/arrays → generics → functional Java → exception handling → JVM/memory → concurrency → I/O/networking basics → modern Java → Spring Boot/JPA/Hibernate/Kafka/Redis. Prioritize interview-relevant depth over obscure libraries.

## 2A. Daily 2-3 Hour Operating System

| Block | Time | Purpose | Output |
| --- | --- | --- | --- |
| DSA Pattern Mastery | 60-75 min | Build base: arrays, hashing, two-pointer, sliding window, binary search, trees, graphs, DP | 1 problem attempt + explanation + edge cases |
| SQL / Core CS | 35-45 min | GCC oral/interview depth: SQL Server, DBMS, OS, networking, concurrency | 1 concept note or query + 3 interview questions |
| LLD / HLD / Project | 45-60 min | Senior engineering signal: design, trade-offs, production thinking | 1 design decision, class/API sketch, or project increment |
| Review Buffer | 10-15 min | Convert mistakes into durable memory | Progress log + weak-pattern update |

Rule: No more than 3 high-priority tasks/day. If energy is low, reduce to DSA revision + SQL/core CS oral review only.

| Phase | Weeks | DSA Focus | LLD/HLD Focus | SQL Focus | Status |
| --- | --- | --- | --- | --- | --- |
| 1 | 1-2 | Arrays, HashMap, Two-Pointer, Sliding Window | SOLID, Rate Limiter, Parking Lot, LRU Cache | Joins, GROUP BY, HAVING, NULL handling | In Progress |
| 2 | 3-4 | Binary Search, Sorting, Stack/Queue, Linked List | Logger, Elevator, Vending Machine, retry/idempotency | Window Functions, CTEs, ranking queries | Not Started |
| 3 | 5-6 | Trees/BST, BFS/DFS basics | Low-latency API design, circuit breaker, API gateway | Indexing, execution plans, scan vs seek | Not Started |
| 4 | 7-8 | Graphs, Topological Sort, Heaps | BookMyShow/ticket booking, concurrency-safe reservations | Transactions, isolation levels, locks, deadlocks | Not Started |
| 5 | 9-10 | DP 1D, Greedy, Recursion | Payment/order workflow, outbox pattern, audit logging | Query optimization, covering indexes | Not Started |
| 6 | 11-12 | DP 2D, Backtracking | Notification system, queue/event bus, DLQ/retry design | Data modeling for financial records | Not Started |
| 7 | 13-14 | Mixed GCC top-list drill | URL Shortener, distributed cache, rate limiter at scale | Timed SQL mocks + explain-plan review | Not Started |
| 8 | 15-16 | Hard DSA by pattern | Trade/order processing HLD project | SQL Server performance case studies | Not Started |
| 9 | 17-18 | Timed DSA mocks | GCC mock interviews: backend + DB + incident scenarios | Timed DBMS/oral rounds | Not Started |
| 10 | 19-20 | Weak-area repair | Final VP-track mocks + resume/project storytelling | Final SQL/core CS revision | Not Started |

*(Agent adjusts week boundaries based on actual pace — this is a living plan, not fixed.)*

---

## 3. Problem Log (DSA)

| Date | Platform | Problem | Pattern/Tag | Difficulty | Hints Used | Time Taken | Result | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| | | | | | | | | |

---

## 4. Strength / Weakness Tracker

| Pattern/Tag | Attempts | Solved Independently | Needed Hints | Failed/Stuck | Mastery (🔴/🟡/🟢) |
| --- | --- | --- | --- | --- | --- |
| Two-Pointer | 0 | 0 | 0 | 0 | 🔴 |
| Sliding Window | 0 | 0 | 0 | 0 | 🔴 |
| Binary Search | 0 | 0 | 0 | 0 | 🔴 |
| Trees/BST | 0 | 0 | 0 | 0 | 🔴 |
| Graphs (BFS/DFS) | 0 | 0 | 0 | 0 | 🔴 |
| Graphs (Shortest Path/MST) | 0 | 0 | 0 | 0 | 🔴 |
| Backtracking | 0 | 0 | 0 | 0 | 🔴 |
| DP (1D) | 0 | 0 | 0 | 0 | 🔴 |
| DP (2D/Knapsack/LCS) | 0 | 0 | 0 | 0 | 🔴 |
| Heaps/Top-K | 0 | 0 | 0 | 0 | 🔴 |
| Linked Lists | 0 | 0 | 0 | 0 | 🔴 |

*(Agent adds new rows as new tags/patterns are practiced.)*

---

## 5. System Design Practice Log (LLD/HLD)

| Date | Problem | Requirements Clarified Well? | Trade-offs Discussed | Feedback / Gaps |
| --- | --- | --- | --- | --- |
| | | | | |

---

## 6. SQL Practice Log

| Date | Problem/Source | Concept Tested | Result | Notes |
| --- | --- | --- | --- | --- |
| | | | | |

---

## 7. Contest Log

| Date | Contest | Platform | Rank/Score | Problems Solved | Post-Contest Review |
| --- | --- | --- | --- | --- | --- |
| | | | | | |

---

## 8. Weekly Review Snapshots

| Week Of | Top 3 Weak Patterns | Wins | Next Week Focus |
| --- | --- | --- | --- |
| | | | |

---

## 9. Mock Interview Log

| Date | Type (DSA/LLD/HLD/Behavioral) | Problem/Topic | Strengths | Gaps | Action Items |
| --- | --- | --- | --- | --- | --- |
| | | | | | |
