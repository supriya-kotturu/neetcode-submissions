class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    getFreqMap(word: string): Map<string, number> {
        const freqMap = new Map<string, number>();
        for (let s of word) {
            freqMap.set(s, (freqMap.get(s) || 0) + 1);
        }
        return freqMap;
    }

    isAnagram(s: string, t: string): boolean {
        if (t.length > s.length) [t, s] = [s, t];

        const sMap = this.getFreqMap(s);
        const tMap = this.getFreqMap(t);

        for (let [k, v] of sMap.entries()) {
            if (!tMap.has(k)) return false;
            if (tMap.get(k) !== v) return false;
        }

        return true;
    }
}
