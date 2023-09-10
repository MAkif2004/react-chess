export function legalPawn(col, row, newBoard, startPos) {
        if (col > startPos[0]) {
            return false;
        }

        if (row !== startPos[1]) {
            if (col === startPos[0] - 1 && row === startPos[1] - 1 && newBoard[col][row] != false
                || col === startPos[0] - 1 && row === startPos[1] + 1 && newBoard[col][row] != false) {
                    return true;
                }
            return false;
        }

        if (newBoard[col][row] != false) {
            return false;
        }

        if (col < startPos[0] - 2) {
            return false;
        }
        if (col < startPos[0] - 1 && startPos[0] !== 6) {
            return false;
        }
    return true;
}