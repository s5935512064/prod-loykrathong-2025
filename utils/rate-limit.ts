// Importing the LRUCache class from the "lru-cache" library
import { LRUCache } from "lru-cache";

// Defining a type for the rate limit options
type Options = {
  uniqueTokenPerInterval?: number; // จำนวนโทเคนไม่ซ้ำสูงสุดในระยะเวลา
  interval?: number; // ระยะเวลาในการแบนในหน่วยมิลลิวินาที
  limit: number; // จำนวนคำขอภายในระยะเวลาที่กำหนด
};

// Exporting a function that creates a rate limiter
export default function rateLimit(options?: Options) {
  // Creating a new LRUCache instance with the provided options or default values
  const tokenCache = new LRUCache({
    max: options?.uniqueTokenPerInterval || 50,
    ttl: options?.interval || 2 * 60 * 1000, // กำหนดระยะเวลาในการแบนเป็น 1 นาที
  });

  // Returning an object with a check function
  return {
    check: (token: string, limit = options?.limit || 100) => {
      // Getting the current token count from the cache or initializing it to 0
      const tokenCount = (tokenCache.get(token) as number[]) || [0];
      // If the token count is 0, set it in the cache
      if (tokenCount[0] === 0) {
        tokenCache.set(token, tokenCount);
      }
      // Incrementing the token count
      tokenCount[0] += 1;

      // Checking if the current usage is greater than or equal to the limit
      const currentUsage = tokenCount[0];
      const isRateLimited = currentUsage >= limit;

      // Returning the rate limit check result
      return {
        isRateLimited,
        currentUsage,
        limit,
      };
    },
  };
}
