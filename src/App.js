
import './App.css';
import { Board } from './Board';
import { CreatePieces } from './CreatePieces';

export default function Game() {
  let pieces = CreatePieces()

  return (
    <>
      <div className="upper-container">
        <div class="box eaten-pieces white">

        </div>
          <Board pieces={pieces}/>
        <div class="box eaten-pieces black">

        </div>
      </div>
      <div className="lower-container"></div>
        <div className="box current-player">

      </div>
    </>
  );
}
