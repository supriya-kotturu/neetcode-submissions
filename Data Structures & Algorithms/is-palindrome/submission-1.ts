class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let l = 0,
            r = s.length - 1;
        const valid = /[a-zA-Z0-9]/;
        s = s.toLowerCase();

        while (l <= r) {
            while (l < r && !valid.test(s[l])) l++;
            while (l < r && !valid.test(s[r])) r--;

            if (s[l] != s[r]) {
                return false;
            }

            l++;
            r--;
        }
        return true;
    }
}
