class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        strs.sort();
        let l = strs[0],
            r = strs[strs.length - 1];
        const res: string[] = [];

        for (let idx = 0; idx < strs[0].length; idx++) {
            if (l[idx] === r[idx]) res.push(l[idx]);
            else break;
        }

        return res.join("");
    }
}
