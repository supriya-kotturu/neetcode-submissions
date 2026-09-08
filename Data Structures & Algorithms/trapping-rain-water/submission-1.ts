class Solution {
    trap(height: number[]): number {
        const maxLeftHt = Array.from(height).fill(0)
        const maxRightHt = Array.from(height).fill(0)
        let totalWaterUnits = 0

        for (let i = 1, j = height.length - 2; i < height.length && j >= 0; i++, j--) {
            maxLeftHt[i] = Math.max(maxLeftHt[i - 1], height[i - 1])
            maxRightHt[j] = Math.max(maxRightHt[j + 1], height[j + 1])
        }

        for (let idx = 0; idx < height.length; idx++) {
            totalWaterUnits += Math.max(0,
                Math.min(maxLeftHt[idx], maxRightHt[idx]) - height[idx])
        }

        return totalWaterUnits
    }
}
