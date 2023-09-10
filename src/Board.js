import { useState } from 'react';

import bKingI from './images/BKing.svg';
import bQueenI from './images/BQueen.svg';
import bRookI from './images/BRook.svg';
import bBishupI from './images/BBishup.svg';
import bKnightI from './images/BKnight.svg';
import bPawnI from './images/BPawn.svg';

import wKingI from './images/WKing.svg';
import wQueenI from './images/WQueen.svg';
import wRookI from './images/WRook.svg';
import wBishupI from './images/WBishup.svg';
import wKnightI from './images/WKnight.svg';
import wPawnI from './images/WPawn.svg';

import { Piece } from './Piece';
import { initializeBoard } from './InitializeBoard';

import { legalPiece } from './LegalMove.js';
import { movePiece } from './MovePiece.js';

let isReversed = false;
let isWhiteTurn = true;
let startIsPressed = false;
let startPiece;
let startPos;

export function Board({pieces}) {
  const [board, setBoard] = useState(initializeBoard(pieces));
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [numbersPos, setNumbersPos] = useState(<><p>8</p><p>7</p><p>6</p><p>5</p><p>4</p><p>3</p><p>2</p><p>1</p></>);
  const [deadWhite, setDeadWhite] = useState([]);
  const [deadBlack, setDeadBlack] = useState([]);

  let renderedBoard = [];

  for (let i = 0; i < 8; i++) {
    let rows = [];
    for (let j = 0; j < 8; j++) {
      switch(board[i][j].id) {

        case (1):
          board[i][j].isWhite == true
          ? rows.push(<Piece move={() => move(i, j, 'piece' + ( (i*8) + (j) ) )} isSelected={selectedPiece === 'piece' +  ( (i*8) + (j) )} name={wKingI} />)
          : rows.push(<Piece move={() => move(i, j, 'piece' + ( (i*8) + (j) ) )} isSelected={selectedPiece === 'piece' +  ( (i*8) + (j) )} name={bKingI} />);
          break;

        case (2):
          board[i][j].isWhite == true
          ? rows.push(<Piece move={() => move(i, j, 'piece' + ( (i*8) + (j) ) )} isSelected={selectedPiece === 'piece' +  ( (i*8) + (j) )} name={wQueenI} />)
          : rows.push(<Piece move={() => move(i, j, 'piece' + ( (i*8) + (j) ) )} isSelected={selectedPiece === 'piece' +  ( (i*8) + (j) )} name={bQueenI} />);
          break;

        case (3):
          board[i][j].isWhite == true
          ? rows.push(<Piece move={() => move(i, j, 'piece' + ( (i*8) + (j) ) )} isSelected={selectedPiece === 'piece' +  ( (i*8) + (j) )} name={wRookI} />)
          : rows.push(<Piece move={() => move(i, j, 'piece' + ( (i*8) + (j) ) )} isSelected={selectedPiece === 'piece' +  ( (i*8) + (j) )} name={bRookI} />);
          break;

        case (4):
          board[i][j].isWhite == true
          ? rows.push(<Piece move={() => move(i, j, 'piece' + ( (i*8) + (j) ) )} isSelected={selectedPiece === 'piece' +  ( (i*8) + (j) )} name={wBishupI} />)
          : rows.push(<Piece move={() => move(i, j, 'piece' + ( (i*8) + (j) ) )} isSelected={selectedPiece === 'piece' +  ( (i*8) + (j) )} name={bBishupI} />);
          break;

        case (5):
          board[i][j].isWhite == true
          ? rows.push(<Piece move={() => move(i, j, 'piece' + ( (i*8) + (j) ) )} isSelected={selectedPiece === 'piece' +  ( (i*8) + (j) )} name={wKnightI} />)
          : rows.push(<Piece move={() => move(i, j, 'piece' + ( (i*8) + (j) ) )} isSelected={selectedPiece === 'piece' +  ( (i*8) + (j) )} name={bKnightI} />);
          break;

        case (6):
          board[i][j].isWhite == true
          ? rows.push(<Piece move={() => move(i, j, 'piece' + ( (i*8) + (j) ) )} isSelected={selectedPiece === 'piece' +  ( (i*8) + (j) )} name={wPawnI} />)
          : rows.push(<Piece move={() => move(i, j, 'piece' + ( (i*8) + (j) ) )} isSelected={selectedPiece === 'piece' +  ( (i*8) + (j) )} name={bPawnI} />);
          break;

        default:
          rows.push(<td><div onClick={() => move(i, j, 'piece' + ( (i*8) + (j) ) )} className="piece"></div></td>);
          break;
      }
    }

    renderedBoard.push(<tr>{rows}</tr>);

  }

    function move(col = null, row = null, piece) {
        let newBoard = [...board];

        if (!startIsPressed) {
            startPos = [col, row];
            startPiece = newBoard[col][row];
            startIsPressed = true;

            if (newBoard[col][row] == 0) {
                startIsPressed = false
            }
            } else {
            if (legalPiece(col, row, newBoard, startPos)) {
                startIsPressed = false;
                isReversed = !isReversed;

                if (isWhiteTurn !== newBoard[startPos[0]][startPos[1]].isWhite) {
                    return;
                }

                isWhiteTurn = !isWhiteTurn;

                let reversedBoard = [];
                for (let i = board.length; i > 0; i--) {
                  reversedBoard.push(movePiece(col, row, newBoard, startPos, startPiece)[i-1]);
                }

                setBoard(movePiece(col, row, newBoard, startPos, startPiece));

                setTimeout(reverse, 500);
                function reverse() {
                    if (isWhiteTurn) {
                      setNumbersPos(<>
                        <p>8</p><p>7</p><p>6</p><p>5</p><p>4</p><p>3</p><p>2</p><p>1</p>
                      </>);
                    } else {
                      setNumbersPos(<>
                          <p>1</p><p>2</p><p>3</p><p>4</p><p>5</p><p>6</p><p>7</p><p>8</p>
                        </>);
                    }

                  setBoard(reversedBoard);
                }
            } else {

                if (startPos[0] == col && startPos[1] == row) {
                startIsPressed = false;
                }

                startPos = [col, row];
                startPiece = newBoard[col][row];
            }
          }

        if (selectedPiece === piece || newBoard[startPos[0]][startPos[1]] == 0) {
            setSelectedPiece(null);
        } else {
            setSelectedPiece(piece);
        }
    }

    function resetBoard() {
        setBoard(initializeBoard(pieces));
        isWhiteTurn = true;
    }

  return (
    <>
    <div className="board-container">
      <div className="container1">
        <div className="numbers" id="numbers">
          {numbersPos}
        </div>
        <div className="board">
          <table>
            <tbody>{renderedBoard}</tbody>
          </table>
        </div>
      </div>
      <div className="container2">
        <div className="letters" id="letters">
          <p>A</p><p>B</p><p>C</p><p>D</p><p>E</p><p>F</p><p>G</p><p>H</p>
        </div>
      </div>
    </div>
    </>
  );
}