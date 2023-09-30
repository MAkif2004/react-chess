
export function movePiece(col, row, newBoard, startPos, startPiece) {
    let reversedBoard = [];

      newBoard[col][row] = startPiece;
      newBoard[startPos[0]][startPos[1]] = 0;

      for (let i = newBoard.length; i > 0; i--) {
        reversedBoard.push(newBoard[i-1]);
      }

      return newBoard;
  }