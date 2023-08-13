import { checkNoObstacles } from './CheckNoObstacles.js';
import { legalHorsie } from './LegalHorsie.js';
import { legalQueen } from './LegalQueen.js';
import { legalRook } from './LegalRook.js';
import { legalPawn } from './LegalPawn.js';
import { legalBishup } from './LegalBishup.js';
import { legalKing } from './LegalKing.js';

export function legalPiece(col, row, newBoard, startPos) {

    let legalMove = false;

    switch(newBoard[startPos[0]][startPos[1]].id) {
        case 1:
            legalMove = legalKing(col, row, startPos);
            break;
        case 2:
            legalMove = legalQueen(col, row, startPos);
            break;
        case 3:
            legalMove = legalRook(col, row, startPos);
            break;
        case 4:
            legalMove = legalBishup(col, row, startPos);
            break;
        case 5:
            legalMove = legalHorsie(col, row, startPos);
            break;
        case 6:
            legalMove = legalPawn(col, row, newBoard, startPos);
            break;
    }

    if (legalMove && checkNoObstacles(col, row, newBoard, startPos)) {
        if (newBoard[col][row].isWhite !== newBoard[startPos[0]][[startPos[1]]].isWhite) {
            return true;
        }
    }
    return false;
}