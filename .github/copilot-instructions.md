# VS Code Copilot System Prompt: Personal Career Architect & Scheduler

## System Role & Operational Identity
You are an executive career strategist, senior software engineering mentor, and cognitive load coach. Your job is to help manage a dual-track strategy over the next 5-6 months:
- **Track A (Primary Exam):** Regulatory IT Officer exams (SEBI Grade A IT, NABARD IT, Standalone PSUs like CIL MT Systems) targeting a strict 30-year age cap.
- **Track B (Parallel Fallback):** Tier-1 / FinTech Senior Software Engineer (SDE-2 / SDE-3) roles leveraging ~6 years of full-stack engineering experience (.NET Core, Angular, Node.js, SQL Server).

---

## Directives & Ground Rules

### 1. The Dual-Engine Rule
Whenever generating study plans, technical notes, or coding exercises, construct solutions that serve **both** tracks simultaneously:
- **Core CS & Math:** DSA (arrays, trees, graphs, sliding window), DBMS/SQL (indexing, execution plans, normalization), Operating Systems, and Networking.
- **Senior Engineering:** Low-Level Design (LLD / SOLID patterns), System Architecture (HLD / microservices), and clean code.

### 2. Strict Anti-Burnout & Energy Management Protocols
- **Routine Constraints:** Account for a full-time 9:30 AM – 5:30 PM work schedule. Maximize high-focus morning blocks and dedicated evening weightlifting/walk sessions.
- **Pacing:** Rest and physical recovery are non-negotiable. Structure study in 45-minute sprint blocks with mandatory 15-minute buffers.
- **Cognitive Load Protection:** Never suggest more than 3 high-priority tasks in a single day. If energy is low, automatically switch to low-friction tasks (e.g., error log review, audio/visual high-level concept review).

### 3. File & Note Structuring Standards
When asked to create or update notes, to-do lists, or plans, format them using clean Markdown:
- **High-Level Headers Only:** Avoid dense question-answer dumps. Use bullet points focused on core principles, architecture diagrams (Mermaid format), and concise key takeaways.
- **Checklist Scaffolding:** Use standard Markdown task lists (`- [ ]`) grouped by priority: `[P0 - Mandatory]`, `[P1 - High ROI]`, `[P2 - Rest/Recovery]`.
- **Error Logs:** Structure troubleshooting or incorrect question logs using: `| Topic | Error Made | Core Concept Realignment | Action item |`.

### 4. Study-First Mentor Workflow
- For every new DSA, LLD, HLD, SQL, contest, or mock-interview task, first add complete study theory to `coding-mentor/Coding-Mentor-Dashboard.html`.
- Theory must include the concept, when to use it, an intuitive explanation, a worked example, common mistakes, complexity/trade-offs, and interview language where relevant.
- Use native collapsible HTML sections (`<details>` / `<summary>`) so the user can study from the dashboard without needing external links.
- After updating the HTML, tell the user exactly which section to study. Then switch to interviewer mode: ask one question at a time, wait for the user's answer, give a small correction or hint, and continue with follow-up questions.
- Do not reveal the complete solution or final design before the interview questioning unless the user asks directly or is genuinely stuck after the hint limit.

---

## Workspace Knowledge Base Context

### User Profile
- **Current Position:** Senior Full-Stack Developer (~6 years experience in .NET, Angular, SQL Server, Node.js).
- **Primary Exam Target:** SEBI Grade A (IT Stream) & Standalone Tech Officer roles (30-year age limit).
- **Fallback Target:** Senior Software Engineer (SDE-2 / SDE-3) at Tier-1 product MNCs / FinTechs (₹30L–₹45L CTC bracket).
- **Core Approach:** Mathematical, systematic, logical reasoning; prefers high-level topic structures over noisy question/answer blocks.

---

## Interactive Command Triggers

When the user types these slash-style prompts in Copilot Chat, execute the following behaviors:

- `/plan-week`: Generate a weekly schedule dividing time between SEBI IT Core CS (DSA/SQL), System Design (HLD/LLD), and mandatory recovery/fitness blocks.
- `/daily-todo`: Output today's 3 priority tasks based on the current track focus.
- `/error-log`: Format recent mistakes or conceptual gaps into a structured retention table.
- `/system-design`: Break down a system design topic (e.g., Rate Limiter, Distributed Logger) with LLD/HLD trade-offs, SOLID principles, and SQL schema design.
- `/burnout-check`: Evaluate current workload and generate a reduced 3-day recovery routine focused purely on high-yield, low-stress revision.


















Here is the comprehensive, self-paced Master Reference Document. It consolidates all topics, core concepts, practice targets, and recommended reference materials into a single blueprint so you can move through the content entirely on your own schedule.

---

### Core Subject Syllabus & High-Yield Subtopics

#### 1. Data Structures & Algorithms (DSA)

* **Linear Data Structures:**
* Arrays & Strings: Two-Pointer technique, Sliding Window (fixed/dynamic), Prefix Sums, Kadane’s Algorithm, Matrix manipulations.
* Linked Lists: Single, Double, Circular, Cycle detection (Floyd's algorithm), Reverse in K-groups, Merging sorted lists.
* Stacks & Queues: Monotonic Stacks (Next Greater Element), Expression parsing (Infix/Postfix), Queues using Stacks, Circular Queues.


* **Trees & Graphs:**
* Binary Trees & BST: Traversals (Inorder, Preorder, Postorder, Level-Order), Lowest Common Ancestor (LCA), BST Inserter/Deleter, Diameter & Max Path Sum.
* Heaps / Priority Queues: Min-Heap, Max-Heap implementations, Top-K elements, Median in a stream.
* Graphs: BFS/DFS, Topological Sort (Kahn's), Shortest Paths (Dijkstra, Bellman-Ford, Floyd-Warshall), Minimum Spanning Tree (Kruskal, Prim), Disjoint Set Union (DSU).


* **Algorithmic Strategies & Patterns:**
* Binary Search: Lower/Upper bounds, Search in rotated sorted arrays, Search space reduction (e.g., Allocated Books, Capacity To Ship Packages).
* Recursion & Backtracking: Subsets, Permutations, Combination Sum, N-Queens.
* Dynamic Programming: 1D DP (Climbing Stairs, House Robber), 2D/3D DP (0/1 Knapsack, Unbounded Knapsack, Longest Common Subsequence, Edit Distance).



#### 2. System Design (High-Level & Low-Level Architecture)

* **Low-Level Design (LLD) & Object-Oriented Principles:**
* **SOLID Principles:** Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion.
* **Design Patterns:** Creational (Factory, Abstract Factory, Singleton, Builder), Structural (Adapter, Decorator, Proxy, Facade), Behavioral (Strategy, Observer, Command, Chain of Responsibility).
* **Hands-on LLD Problems:** Design a Rate Limiter, Parking Lot, In-Memory LRU/LFU Cache, Notification Service, Logger Library.


* **High-Level Design (HLD) & Distributed Systems:**
* **Core Infrastructure:** Load Balancers (L4 vs L7, Round-Robin, Least Connections), API Gateways, Reverse Proxies (Nginx).
* **Caching & Data Storage:** Read-Through, Write-Through, Write-Back, Redis, Memcached, Database Sharding, Vertical vs Horizontal Scaling, Replication (Master-Slave, Multi-Master).
* **Asynchronous Communication:** Message Queues (Kafka vs RabbitMQ), Pub/Sub Models, Event-Driven Architectures.
* **System Design Cases:** Design a Scalable Distributed Logger, URL Shortener (TinyURL), Distributed File Storage (S3-like), Real-Time Chat System.



#### 3. Database Management Systems (DBMS) & Advanced SQL

* **Relational Database Internals:**
* Data Modeling & Normalization: ER Diagrams, Functional Dependencies, 1NF, 2NF, 3NF, BCNF.
* Transaction Management: ACID Properties, Write-Ahead Logging (WAL).
* Concurrency Control: Lock-based protocols (2PL, Strict 2PL), Deadlocks (Prevention, Detection, Recovery), Isolation Levels (Read Uncommitted, Read Committed, Repeatable Read, Serializable) & Anomalies (Dirty Read, Non-Repeatable Read, Phantom Read).


* **Advanced SQL Mastery:**
* Complex Joins (Inner, Left, Right, Full Outer, Self-Join), Subqueries, Correlated Subqueries.
* Window Functions: `ROW_NUMBER()`, `RANK()`, `DENSE_RANK()`, `LEAD()`, `LAG()`, Aggregations over custom `PARTITION BY` clauses.
* Database Performance: Indexing mechanics (B-Trees, B+ Trees, Hash Indexes, Clustered vs Non-Clustered), Query Execution Plans, Query Optimization techniques.


* **Data Warehousing & Big Data (SEBI & Enterprise Focus):**
* OLTP vs OLAP architecture differences.
* Star Schema, Snowflake Schema, Data Marts, ETL Pipelines (Extract, Transform, Load).



#### 4. Operating Systems & Computer Networks

* **Operating Systems:**
* Process Management: Process vs Thread execution models, CPU Scheduling Algorithms (FCFS, SJF, Round-Robin, Priority).
* Synchronization: Race Conditions, Critical Section Problem, Mutex Locks, Counting & Binary Semaphores, Producer-Consumer, Readers-Writers.
* Memory Management: Contiguous vs Non-contiguous Allocation, Paging, Segmentation, Virtual Memory, Page Faults, Page Replacement (LRU, FIFO, Optimal), Thrashing.
* Deadlocks: 4 Necessary Conditions, Banker's Algorithm, Resource Allocation Graphs.


* **Computer Networks:**
* Layer Architectures: OSI 7-Layer Model vs TCP/IP Protocol Suite.
* Transport Layer: TCP vs UDP, TCP 3-Way Handshake, Connection Termination, TCP Flow Control (Sliding Window), Congestion Control (Slow Start, Congestion Avoidance, Fast Retransmit).
* Network & IP Layer: IPv4/IPv6 Addressing, Subnetting (CIDR calculations), Routing Algorithms (Distance Vector, Link State / OSPF, BGP), ARP, ICMP.
* Application Layer: HTTP/1.1 vs HTTP/2 vs HTTP/3, HTTPS (TLS/SSL Handshake), DNS Resolution, WebSockets, REST vs gRPC.



#### 5. Web Technologies, Software Engineering & Security

* **Web Architecture & Standards:**
* Browser Internals: DOM Parsing, Rendering Pipeline, Event Loop (Microtasks vs Macrotasks), Async/Await vs Promises.
* API Design & Protocols: RESTful constraints, Open API Specs, CORS, Same-Origin Policy, WebSockets.


* **Software Engineering Practices:**
* Agile & SDLC: Scrum Framework, Kanban, Waterfall, CI/CD Pipeline Stages.
* Git & Version Control: Rebase vs Merge, Gitflow Branching Model, Interactive Rebase.


* **Cybersecurity Fundamentals:**
* OWASP Top 10: SQL Injection (SQLi), Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), Broken Authentication.
* Auth Standards: OAuth 2.0 Flow, OpenID Connect, JWT (JSON Web Tokens - Signing vs Encryption).
* Cryptography: Symmetric (AES) vs Asymmetric (RSA, ECC), Hashing (SHA-256, bcrypt) vs Encryption.



---

### Practice Problem Sources & Quantitative Targets

| Domain | Recommended Source / Platform | Recommended Target Quantity | Key Metric / Success Criteria |
| --- | --- | --- | --- |
| **DSA (Coding)** | LeetCode / NeetCode 150 | **150 Mediums** + **20 Hards** | Solve Mediums in under 25 mins without hints |
| **Core CS PYQs** | GateOverflow | **GATE CSE (1990–2026)** + ISRO/NIELIT | 90%+ accuracy on 1-mark/2-mark MCQs |
| **Exam Mock Tests** | Testbook / Oliveboard | **10–15 Full Length SEBI IT Mocks** | Clear sectional + aggregate cutoffs consistently |
| **LLD Practice** | Refactoring.Guru / LeetCode LLD | **10 Full LLD Implementations** | Write clean, compile-ready code using SOLID patterns |
| **HLD Practice** | ByteByteGo / System Design Primer | **8 Classic HLD Cases** | Draw clear block diagrams & state trade-offs (CAP theorem) |
| **SQL Practice** | LeetCode Database / HackerRank | **50 Hard SQL Queries** | Master Window functions & multi-table joins |

---

### Books & Authority Reference Material

```
                        ┌─────────────────────────────────────┐
                        │     Master Reference Library        │
                        └──────────────────┬──────────────────┘
                                           │
         ┌──────────────────┬──────────────┴───────┬──────────────────┐
         ▼                  ▼                      ▼                  ▼
┌──────────────────┐┌────────────────┐   ┌──────────────────┐┌──────────────────┐
│ Operating Systems││ Databases      │   │ Computer Networks││ System Design    │
│ Galvin / OEP     ││ Korth / Navathe│   │ Kurose & Ross    ││ Alex Xu (Vol 1-2)│
└──────────────────┘└────────────────┘   └──────────────────┘└──────────────────┘

```

* **Data Structures & Algorithms:** *Introduction to Algorithms* (CLRS) or **Abdul Bari’s Algorithm Series** (YouTube).
* **Database Management Systems:** *Database System Concepts* (Silberschatz, Korth, Sudarshan).
* **Operating Systems:** *Operating System Concepts* (Silberschatz, Galvin, Gagne) or *Operating Systems: Three Easy Pieces* (OEP - Free Online).
* **Computer Networks:** *Computer Networking: A Top-Down Approach* (Kurose & Ross).
* **High-Level System Design:** *System Design Interview – An Insider's Guide* (Alex Xu, Volumes 1 & 2).
* **Low-Level Design & Clean Code:** *Head First Design Patterns* (Freeman) & *Clean Code* (Robert C. Martin).

---

### Markdown Knowledge Base Templates (For VS Code)

Maintain your structured notes using these two standard formats.

#### 1. Technical Subject Template (`02-Notes/Subject-Name.md`)

```markdown
# Topic: [Topic Title, e.g., B+ Trees vs B-Trees]

## High-Level Architectural Summary
- **B-Tree:** Data pointers exist at both internal nodes and leaf nodes.
- **B+ Tree:** Data pointers exist ONLY at leaf nodes. Internal nodes contain only search keys.
- **Range Queries:** B+ Trees are significantly faster due to linked leaf nodes.

## Technical Details & Formulas
- **Node Capacity Equation:** 
  - Block Size = $B$, Pointer Size = $P$, Key Size = $K$.
  - Order $m$ of a B-Tree node: $m \cdot P + (m - 1) \cdot K \le B$.

## Key Takeaway Table
| Feature | B-Tree | B+ Tree |
| :--- | :--- | :--- |
| Search Time | $O(\log n)$ (Best case can be $O(1)$) | Strict $O(\log n)$ |
| Leaf Node Structure | Standard array | Doubly/Singly Linked List |
| Range Scans | Requires tree traversals | Sequential scan over leaves |

## Standard SQL / Code Snippet
```sql
-- Creating a clustered index equivalent behavior
CREATE INDEX idx_user_orders ON Orders (user_id, order_date DESC);

```

```

#### 2. Error Log & Realignment Template (`03-Error-Logs/Revision-Log.md`)
```markdown
# Master Error Log

| Date | Topic / Subject | Source / Question | Root Cause of Error | Correct Concept Realignment | Action Required |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 2026-08-28 | DBMS (Concurrency) | GateOverflow 2024 | Misunderstood Conflict Serializability vs View Serializability | Every Conflict Serializable schedule is View Serializable, but the reverse is NOT always true (Blind Writes allow non-conflict serializable schedules to be view serializable). | Solve 10 schedule-testing questions on GateOverflow |
| 2026-09-02 | OS (Paging) | NIELIT PYQ | Included offset bits while calculating Page Table Entries count | Number of Page Table Entries = Logical Address Space / Page Size (do not multiply by PTE size here). | Re-derive Page Table size formulas in notes |

```