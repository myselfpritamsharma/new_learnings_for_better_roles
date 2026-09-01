# Rate Limiter Algorithm Choice

## Problem

Design an API rate limiter where each user can make 100 requests per minute. Extra requests should be rejected with HTTP `429 Too Many Requests`.

## Algorithms

### Fixed Window Counter

- Count requests in fixed intervals, such as one counter per user per minute.
- Very fast and memory efficient.
- Weakness: boundary burst. A user can make 100 requests at `10:00:59` and 100 more at `10:01:00`.

### Sliding Window Log

- Store request timestamps per user.
- Remove timestamps older than the last 60 seconds.
- Very accurate.
- Weakness: memory heavy at high traffic because every request timestamp is stored.

### Token Bucket

- Each user has a bucket with tokens.
- Requests consume tokens.
- Tokens refill over time at a fixed rate.
- Allows controlled bursts while enforcing the average request rate.
- Memory efficient: store `tokens` and `last_refill_time` per user.

### Leaky Bucket

- Requests enter a queue and are processed at a fixed output rate.
- Smooths traffic to downstream services.
- Weakness: queueing can add latency.

## Recommended Interview Answer

For `100 requests/minute/user`, choose **Token Bucket** as the default.

Reason 1: It allows controlled bursts, which is practical for real users and services.

Reason 2: It is memory efficient because each user only needs token count and last refill timestamp.

Drawback: It is not as strictly accurate as Sliding Window Log. If exact fairness is mandatory, Sliding Window Log or Sliding Window Counter is better.

## LLD Extension

Use Strategy pattern:

- `RateLimiter` owns request decision flow.
- `RateLimitStrategy` defines `allow(user_id, timestamp)`.
- `TokenBucketStrategy`, `SlidingWindowStrategy`, and `FixedWindowStrategy` implement the strategy.
- `Storage` abstraction hides Redis/in-memory storage.
