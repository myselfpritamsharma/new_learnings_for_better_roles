# Coding Mentor — Progress Tracker

> Maintained by the "Coding Mentor" agent. Updated after every session (problem attempt, review, mock interview, or contest). Do not hand-edit tables unless correcting a mistake — ask the agent to log entries instead.

---

## 1. Profile & Timeline

| Field | Value |
| --- | --- |
| Start Date | 2026-08-30 |
| Target Date (4-5 months) | 2027-01-15 to 2027-02-15 |
| Weekly available hours (est.) | Weekday mornings (45-90 min) + weekend deeper blocks |
| Primary goal | GCC / Wall Street financial engineering role: Senior Software Engineer, SDE-3, Lead Engineer, or VP-track backend/platform engineer |
| Background | ~6 yrs full-stack (.NET Core, Angular, Node.js, SQL Server) |
| **Target Companies** | Goldman Sachs, JPMorgan Chase, Morgan Stanley, Citi, Barclays, Deutsche Bank, Wells Fargo, Amex, Walmart Global Tech, Target, and Citadel-style financial engineering teams |
| **Key Interview Lever** | GCC/fintech interviews reward backend depth: SQL Server performance, transaction integrity, concurrency, low-latency APIs, high availability, fault tolerance, secure engineering, observability, and pragmatic system design. DSA gates entry; design and production judgment win the level. |
| **Role Focus** | Senior Backend / Full-Stack Engineer (.NET Core + SQL Server + Node.js), Lead Engineer, VP-track engineering role, platform/integration engineer for mission-critical systems |

---

## 2. Curriculum Roadmap (Phase → Focus → Status)

> **Strategic Note:** DSA is a gating filter, but the primary target is now GCC/Wall Street financial engineering. Preparation must bias toward low-latency backend APIs, SQL Server query tuning, transaction integrity, concurrency control, high availability, fault tolerance, auditability, security compliance, observability, and incident-ready production design. By week 8+, mock interviews should be 50% backend/HLD, 25% LLD, 15% SQL/database internals, and 10% DSA.

| Phase | Weeks | DSA Focus | LLD/HLD Focus | SQL Focus | Status |
| --- | --- | --- | --- | --- | --- |
| 1 | 1-2 | Arrays/Strings, Two-Pointer, Sliding Window | SOLID, Rate Limiter, LRU Cache | Joins, Subqueries, LEFT JOIN correctness | In Progress |
| 2 | 3-4 | Linked Lists, Stacks/Queues, Monotonic Stack | Low-latency API design, retry/idempotency, circuit breaker | Window Functions, CTEs | Not Started |
| 3 | 5-6 | Binary Search + variants, Recursion/Backtracking | Transaction-safe order/payment workflow, audit logging | Indexing, execution plans, lock contention | Not Started |
| 4 | 7-8 | Trees/BST, Heaps/Priority Queue | High-availability service design, Redis caching, cache invalidation | Query optimization, clustered/non-clustered indexes | Not Started |
| 5 | 9-10 | Graphs, BFS/DFS, Topo Sort | Distributed logging/monitoring, Kafka/message queues | Isolation levels, deadlocks, ACID | Not Started |
| 6 | 11-12 | Shortest Paths, MST, DSU | API Gateway, auth, rate limiting at scale, security compliance | Data modeling for financial records | Not Started |
| 7 | 13-14 | Dynamic Programming (1D) | Batch vs streaming processing, reconciliation systems | Large data joins, partitioning, ETL basics | Not Started |
| 8 | 15-16 | DP 2D/Knapsack/LCS/Edit Distance | Portfolio/trade/order-book style HLD case studies | Timed hard SQL mocks | Not Started |
| 9 | 17-18 | Mixed review + weak-pattern drilling | GCC mock interviews: backend + database + incident scenarios | Timed SQL + execution-plan review | Not Started |
| 10 | 19-20 | Targeted DSA refresh | Final GCC/VP-track mocks + resume/story drill | Final database mocks | Not Started |

*(Agent adjusts week boundaries based on actual pace — this is a living plan, not fixed.)*

---

## 3. Problem Log (DSA)

| Date | Platform | Problem | Pattern/Tag | Difficulty | Hints Used | Time Taken | Result | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-08-30 | LeetCode | Valid Palindrome | Two-Pointer | Easy | 3 (skip logic, case handling, mixed char comparison) | 35 min | Solved | Clean solution; understood skip-one-at-a-time pattern; O(n) time, O(1) space |
| 2026-08-31 | LeetCode | Longest Substring Without Repeating Characters | Sliding Window | Medium | 1 (shrink step should remove left char) | In progress | Solved | Correct sliding-window implementation; learned to remove `s[left]` when shrinking the window; O(n) time, O(k) space |
| 2026-09-01 | LeetCode | Permutation in String | Sliding Window | Medium | 1 (delete outgoing char before moving left) | In progress | Solved | Correct fixed-size sliding window; built `need` and `window` maps and deleted zero-count keys before moving `left` |
| 2026-09-05 | LeetCode | Longest Repeating Character Replacement | Sliding Window | Medium | 1 (update answer after shrinking) | In progress | Solved | Correct variable-size window; tracks maximum frequency and measures only after repairing an invalid window; O(n) time, O(1) space |
| 2026-09-06 | LeetCode | Minimum Window Substring | Sliding Window | Hard | Review in progress | In progress | Solved | Correct valid-window invariant; refined shrink logic with outgoing character and decremented `formed` when a required count became insufficient; O(n) time, O(k) space |
| 2026-09-07 | LeetCode | 3Sum | Two-Pointer | Medium | 6 (ternary syntax, missing inner while, append vs push, infinite loop on match, wrong duplicate-skip placement/bounds, unconditional bottom if/else after match) | In progress | Solved | Correct sort + two-pointer + duplicate skipping at both i and left/right levels; if/elif/else chain prevents double pointer movement after a match; O(n²) time, O(1) extra space |

---

## 4. Strength / Weakness Tracker

| Pattern/Tag | Attempts | Solved Independently | Needed Hints | Failed/Stuck | Mastery (🔴/🟡/🟢) |
| --- | --- | --- | --- | --- | --- |
| Two-Pointer | 2 | 2 | 1 | 0 | 🟢 |
| Sliding Window | 4 | 4 | 3 | 0 | 🟢 |
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
