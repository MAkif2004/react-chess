export function legalKing(col, row, startPos) {
    if (col < startPos[0] - 1
    || col > startPos[0] + 1) {
        return false;
    }
    if (row > startPos[1] + 1
    || row < startPos[1] - 1) {
        return false;
    }

    return true;
}