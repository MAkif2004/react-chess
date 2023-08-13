export function legalHorsie(col, row, startPos) {
    const moves = [
        [-2, 1],
        [-2, -1],
        [-1, 2],
        [1, 2],
        [1, -2],
        [-1, -2],
        [2, -1],
        [2, 1]
    ]

    for (let i = 0; i < moves.length; i++) {
        if (startPos[0] + moves[i][0] == col
            && startPos[1] + moves[i][1] == row) {
                return true;
            }
    }

    console.log('bruh');

    return false
}