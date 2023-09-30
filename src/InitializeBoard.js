export function initializeBoard(pieces) {
    let newBoard = [
      [pieces.bRook, pieces.bKnight, pieces.bBishup, pieces.bQueen, pieces.bKing, pieces.bBishup, pieces.bKnight, pieces.bRook],
      [pieces.bPawn, pieces.bPawn, pieces.bPawn, pieces.bPawn, pieces.bPawn, pieces.bPawn, pieces.bPawn, pieces.bPawn, ],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [pieces.wPawn, pieces.wPawn, pieces.wPawn, pieces.wPawn, pieces.wPawn, pieces.wPawn, pieces.wPawn, pieces.wPawn, ],
      [pieces.wRook, pieces.wKnight, pieces.wBishup, pieces.wQueen, pieces.wKing, pieces.wBishup, pieces.wKnight, pieces.wRook]
    ];

    return newBoard;
}