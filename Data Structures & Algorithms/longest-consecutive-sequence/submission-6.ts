class Solution {
    longestConsecutive(nums: number[]): number {
        const numSet: Set<number> = new Set(nums);
        const segMap: Map<number, Set<number>> = new Map();
        let maxLen = 0;

        for (let n of nums) {
            const prev = n - 1;
            if (!numSet.has(prev)) {
                segMap.set(n, new Set([n]));
            }

            const segSet = segMap.get(n);
            let next = n + 1;
            while (segSet && numSet.has(next)) {
                segSet.add(next);
                next++;
            }
        }

        for (let [_, s] of segMap.entries()) {
            if (s.size > maxLen) maxLen = s.size;
        }

        return maxLen;
    }
}
