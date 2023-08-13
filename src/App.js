
import './App.css';
import { Board } from './Board';
import { CreatePieces } from './CreatePieces';

export default function Game() {
  let pieces = CreatePieces()

  return (
    <Board pieces={pieces}/>
  );
}
