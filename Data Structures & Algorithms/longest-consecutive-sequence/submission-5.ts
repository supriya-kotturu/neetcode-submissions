class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const hMap: Map<number, Array<number>> = new Map();
        const nSet = new Set(nums);
        let maxLen = 0;

        for (let n of nums) {
            const prev = n - 1;
            if (!nSet.has(prev)) {
                hMap.set(n, [n]);
            }
            const arr = hMap.get(n);
            let next = n + 1;

            while (arr && nSet.has(next)) {
                arr.push(n + 1);
                next++;
            }
        }

        for (let [_, arr] of hMap.entries()) {
            if (arr.length > maxLen) maxLen = arr.length;
        }

        return maxLen;
    }
}
