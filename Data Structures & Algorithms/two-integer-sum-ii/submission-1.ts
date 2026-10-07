class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        const n = numbers.length;
        let l = 0,
            r = n - 1;

        while (l < r) {
            const sum = numbers[l] + numbers[r];
            if (sum === target) {
                return [l + 1, r + 1];
            } else if (sum > target && l != r) {
                while (l < r && numbers[r] === numbers[r - 1]) r--;

                r--;
            } else {
                while (l < r && numbers[l] === numbers[l + 1]) l++;
                l++;
            }
        }

        return [-1, -1];
    }
}
