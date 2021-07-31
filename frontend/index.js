/**
 * Board functionality
 *  - alternate Xs and Os on the board
 * 
 * Turn Tracker
 *  - alternate turn indication
 * 
 * Show Winner result
 */

const board = document.getElementById('board');

// Add functionality to each square to mark player's Xs or Os
const squares = document.getElementsByClassName('symbol');

const squaresArray = Array.from(squares);

// for(let i=0; i < squaresArray.length; i++) {
//   const square = squaresArray[i];

//   square.addEventListener('click', () => {
//     square.innerHTML = 'X';
//   });
// }

squaresArray.forEach((square) => {
  square.addEventListener('click', () => {
    square.innerHTML = 'X';
  });
});