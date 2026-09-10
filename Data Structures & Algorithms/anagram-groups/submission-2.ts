class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    getSortedKey(str: string): string {
        return str.split("").sort().join("");
    }

    groupAnagrams(strs: string[]): string[][] {
        const resMap = new Map<string, string[]>();
        const res: string[][] = [];

        for (let s of strs) {
            const key = this.getSortedKey(s);
            resMap.set(key, resMap.has(key) ? [...resMap.get(key), s] : [s]);
        }

        for (let [_, v] of resMap.entries()) {
            res.push(v);
        }

        return res;
    }
}
