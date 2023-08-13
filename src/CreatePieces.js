export function CreatePieces() {

    function Piece(id, isWhite) {
      this.id = id;
      this.isWhite = isWhite;
    }

    const bKing = new Piece(1, false);
    const bQueen = new Piece(2, false);
    const bRook = new Piece(3, false);
    const bBishup = new Piece(4, false);
    const bKnight = new Piece(5, false);
    const bPawn = new Piece(6, false);

    const wKing = new Piece(1, true);
    const wQueen = new Piece(2, true);
    const wRook = new Piece(3, true);
    const wBishup = new Piece(4, true);
    const wKnight = new Piece(5, true);
    const wPawn = new Piece(6, true);

    let pieces = {
        bKing: bKing,
        bQueen: bQueen,
        bRook: bRook,
        bBishup: bBishup,
        bKnight: bKnight,
        bPawn: bPawn,
        wKing: wKing,
        wQueen: wQueen,
        wRook: wRook,
        wBishup: wBishup,
        wKnight: wKnight,
        wPawn: wPawn
    }

  return pieces;
}