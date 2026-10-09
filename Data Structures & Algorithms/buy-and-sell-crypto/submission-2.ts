class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let profit = 0,
            maxProfit = 0;
        let start = 0;

        for (let end = 1; end < prices.length; end++) {
            const profit = prices[end] - prices[start];
            maxProfit = Math.max(profit, maxProfit);

            if (prices[end] < prices[start]) {
                start = end;
                continue;
            }
        }

        return maxProfit;
    }
}
