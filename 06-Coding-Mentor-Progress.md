# Coding Mentor — Progress Tracker

> Maintained by the "Coding Mentor" agent. Updated after every session (problem attempt, review, mock interview, or contest). Do not hand-edit tables unless correcting a mistake — ask the agent to log entries instead.

---

## 1. Profile & Timeline

| Field | Value |
| --- | --- |
| Start Date | 2026-08-30 |
| Target Date (4-5 months) | 2027-01-15 to 2027-02-15 |
| Weekly available hours (est.) | Weekday mornings (45-90 min) + weekend deeper blocks |
| Primary goal | High-paying, stable role: Tier-1 product / fintech-bank SDE-2/3, or SEBI Grade A / regulatory IT |
| Background | ~6 yrs full-stack (.NET Core, Angular, Node.js, SQL Server) |
| **Target Companies** | **Tier 1:** Google, Microsoft, Uber, Atlassian, Adobe (₹50L–₹90L+) **Tier 2:** Salesforce, ServiceNow, Intuit (₹40L–₹65L) **Tier 3:** Goldman Sachs, Morgan Stanley, Amex, Walmart Tech GCC (₹35L–₹55L, max stability) **Tier 4:** Flipkart, Swiggy, Razorpay, CRED (₹45L–₹75L) |
| **Key Interview Lever** | **System Design (HLD/LLD) >> DSA.** Offers at ₹45L–₹80L depend primarily on HLD/LLD mastery, not framework knowledge. DSA gates entry; design wins the band. |
| **Role Focus** | Senior Full-Stack Engineer (C#/.NET + Angular/React), Backend Systems Engineer (microservices/distributed systems), Tech Lead / Module Lead |

---

## 2. Curriculum Roadmap (Phase → Focus → Status)

> **Strategic Note:** DSA is a gating filter (must be solid by week 4–5). The real multiplier for ₹45L–₹80L compensation is **HLD/LLD mastery** — microservices, sharding, caching, message queues, trade-offs (CAP theorem). From week 5 onward, HLD/LLD problems should be deeper, more ambiguous, and use real company case studies (Rate Limiter for Goldman Sachs, Chat System for Uber, Distributed Logger for fintech). By week 15+, mock interviews should be 60% system design, 30% DSA, 10% behavioral/leadership.

| Phase | Weeks | DSA Focus | LLD/HLD Focus | SQL Focus | Status |
| --- | --- | --- | --- | --- | --- |
| 1 | 1-2 | Arrays/Strings, Two-Pointer, Sliding Window | SOLID recap, Strategy/Factory patterns | Joins, Subqueries | In Progress |
| 2 | 3-4 | Linked Lists, Stacks/Queues, Monotonic Stack | Parking Lot / Rate Limiter | Window Functions | Not Started |
| 3 | 5-6 | Binary Search + variants, Recursion/Backtracking | LRU/LFU Cache, Observer | Indexing & Execution Plans | Not Started |
| 4 | 7-8 | Trees & BST, Heaps/Priority Queue | Notification Service, Chain of Responsibility | Advanced window fns, CTEs | Not Started |
| 5 | 9-10 | Graphs (BFS/DFS, Topo Sort) | Logger Library, Builder | Query optimization | Not Started |
| 6 | 11-12 | Shortest Paths, MST, DSU | Load Balancer / API Gateway HLD | Data modeling / normalization | Not Started |
| 7 | 13-14 | Dynamic Programming (1D) | Caching strategies, Redis patterns | Mixed hard SQL | Not Started |
| 8 | 15-16 | Dynamic Programming (2D/Knapsack/LCS/Edit Distance) | URL Shortener HLD | Mixed hard SQL | Not Started |
| 9 | 17-18 | Mixed review + weak-pattern drilling | Chat System / Distributed Logger HLD | Timed SQL mocks | Not Started |
| 10 | 19-20 | Mock interviews + timed contest sprints | Full HLD mock interviews | Final SQL mocks | Not Started |

*(Agent adjusts week boundaries based on actual pace — this is a living plan, not fixed.)*

---

## 3. Problem Log (DSA)

| Date | Platform | Problem | Pattern/Tag | Difficulty | Hints Used | Time Taken | Result | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-08-30 | LeetCode | Valid Palindrome | Two-Pointer | Easy | 3 (skip logic, case handling, mixed char comparison) | 35 min | Solved | Clean solution; understood skip-one-at-a-time pattern; O(n) time, O(1) space |
| 2026-08-31 | LeetCode | Longest Substring Without Repeating Characters | Sliding Window | Medium | 1 (shrink step should remove left char) | In progress | Solved | Correct sliding-window implementation; learned to remove `s[left]` when shrinking the window; O(n) time, O(k) space |
| 2026-09-01 | LeetCode | Permutation in String | Sliding Window | Medium | 1 (delete outgoing char before moving left) | In progress | Solved | Correct fixed-size sliding window; built `need` and `window` maps and deleted zero-count keys before moving `left` |

---

## 4. Strength / Weakness Tracker

| Pattern/Tag | Attempts | Solved Independently | Needed Hints | Failed/Stuck | Mastery (🔴/🟡/🟢) |
| --- | --- | --- | --- | --- | --- |
| Two-Pointer | 1 | 1 | 0 | 0 | 🟡 |
| Sliding Window | 2 | 2 | 2 | 0 | 🟡 |
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
