export function checkNoObstacles(col, row, newBoard, startPos) {

    let colCheck = [];
    let rowCheck = [];

    if (col !== startPos[0] && row == startPos[1]) {
        for (let i = col + 1; i < startPos[0]; i++) {
            if (newBoard[i][row] !== 0) {
                return false;
            }
        }
        for (let i = col - 1; i > startPos[0]; i--) {
            if (newBoard[i][col] !== 0) {
                return false;
            }
        }
    }

    else if (row !== startPos[1] && col == startPos[0]) {
        for (let i = row + 1; i < startPos[1]; i++) {
            if (newBoard[col][i] !== 0) {
                return false;
            }
        }
        for (let i = row - 1; i > startPos[1]; i--) {
            if (newBoard[col][i] !== 0) {
                return false;
            }
        }
    }

    else if (col !== startPos[0] && row !== startPos[1]) {
        for (let i = col + 1; i < startPos[0]; i++) {
            colCheck.push(i);
        }

        for (let j = row - 1; j > startPos[1]; j--) {
            rowCheck.push(j);
        }

        for (let k = 0; k < colCheck.length; k++) {
            if (newBoard[colCheck[k]][rowCheck[k]] !== 0
            && newBoard[colCheck[k]][rowCheck[k]] !== undefined) {
                return false;
            }
        }

        rowCheck = [];

        for (let j = row + 1; j < startPos[1]; j++) {
            rowCheck.push(j);
        }

        for (let k = 0; k < colCheck.length; k++) {
            if (newBoard[colCheck[k]][rowCheck[k]] !== 0
            && newBoard[colCheck[k]][rowCheck[k]] !== undefined) {
                return false;
            }
        }

        colCheck = [];

        for (let i = col - 1; i > startPos[0]; i--) {
            colCheck.push(i);
        }

        for (let k = 0; k < colCheck.length; k++) {
            if (newBoard[colCheck[k]][rowCheck[k]] !== 0
            && newBoard[colCheck[k]][rowCheck[k]] !== undefined) {
                return false;
            }
        }

        rowCheck = [];

        for (let j = row - 1; j > startPos[1]; j--) {
            rowCheck.push(j);
        }

        for (let k = 0; k < colCheck.length; k++) {
            if (newBoard[colCheck[k]][rowCheck[k]] !== 0
            && newBoard[colCheck[k]][rowCheck[k]] !== undefined) {
                return false;
            }
        }
    }

    return true;
}