class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let start = 0,
            n = s.length;
        let maxLen = 0;
        const uniqSet = new Set<string>();

        for (let end = 0; end < n; end++) {
            while (uniqSet.has(s[end])) {
                uniqSet.delete(s[start]);
                start++;
            }
            uniqSet.add(s[end]);
            maxLen = Math.max(maxLen, uniqSet.size);
        }

        return maxLen;
    }
}
