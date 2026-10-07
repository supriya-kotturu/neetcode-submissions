class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let minIdx = 0,
            minCost = 0;
        let maxProfit = 0,
            profit = 0;

        for (let i = 0; i < prices.length; i++) {
            if (prices[i] < prices[minIdx]) {
                minIdx = i;
            }
            profit = prices[i] - prices[minIdx];
            maxProfit = Math.max(profit, maxProfit);
        }

        return maxProfit;
    }
}
