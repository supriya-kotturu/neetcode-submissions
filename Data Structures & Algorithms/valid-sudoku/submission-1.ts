class Solution {
    isValidSudoku(board: string[][]): boolean {
        const rowMap: Map<number, Set<string>> = new Map();
        const colMap: Map<number, Set<string>> = new Map();
        const gridMap: Map<string, Set<string>> = new Map();

        for (let r = 0; r < board.length; r++) {
            if (!rowMap.has(r)) rowMap.set(r, new Set());
            for (let c = 0; c < board[0].length; c++) {
                if (!colMap.has(c)) colMap.set(c, new Set());

                const curr = board[r][c];
                if (curr === ".") continue;

                const gridRowId = Math.floor(r / 3);
                const gridColId = Math.floor(c / 3);
                const key = `${gridRowId}-${gridColId}`;
                if (!gridMap.has(key)) gridMap.set(key, new Set());

                if (
                    rowMap.get(r).has(curr) ||
                    colMap.get(c).has(curr) ||
                    gridMap.get(key).has(curr)
                )
                    return false;

                rowMap.get(r).add(curr);
                colMap.get(c).add(curr);
                gridMap.get(key).add(curr);
            }
        }

        return true;
    }
}
