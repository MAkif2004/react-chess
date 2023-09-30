export function legalRook(col, row, startPos) {

    if (col !== startPos[0] && row !== startPos[1]) {
        return false;
    }

    return true
}