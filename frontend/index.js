/**
 * Board functionality
 *  - alternate Xs and Os on the board
 * 
 * Turn Tracker
 *  - alternate turn indication
 * 
 * Show Winner result
 */

const player1 = 'X';
const player2 = '0';

let isPlayer1Turn = true;
let currentTurn = isPlayer1Turn ? player1 : player2;

// Add functionality to each square to mark player's Xs or Os
const squares = document.getElementsByClassName('symbol');

const squaresArray = Array.from(squares);

// for(let i=0; i < squares.length; i++) {
//   const square = squares[i];

//   square.addEventListener('click', () => {
//     square.innerHTML = 'X';
//   });
// }

const setupSquare = (square) => {
  square.addEventListener('click', () => {
    square.innerHTML = currentTurn;
    isPlayer1Turn = !isPlayer1Turn;
    currentTurn = isPlayer1Turn ? player1 : player2;
  });
}

squaresArray.forEach(setupSquare);
