export function Piece({name, move, isSelected}) {
    return  <td>
              <img
                className={
                  `piece ${ isSelected ? 'selected' : '' }`}
                src={name}
                onClick={
                  () => {
                    move();
                  }
                }
                />
              </td>
  }