export function legalQueen(col, row, startPos) {

    if (col !== startPos[0] && row == startPos[1]
    || col == startPos[0] && row !== startPos[1]) {
        return true;
    }

    for (let i = 0; i < 8; i++) {
        if (col == startPos[0] - (i+1) && row == startPos[1] - (i+1)
        || col == startPos[0] - (i+1) && row == startPos[1] + (i+1)
        || col == startPos[0] + (i+1) && row == startPos[1] - (i+1)
        || col == startPos[0] + (i+1) && row == startPos[1] + (i+1)) {
            return true;
        }
    }
    return false
}