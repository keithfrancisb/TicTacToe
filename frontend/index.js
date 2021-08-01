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

let i=0;

// Add functionality to each square to mark player's Xs or Os
const squares = document.getElementsByClassName('symbol');

const squaresArray = Array.from(squares);

// for(let i=0; i < squares.length; i++) {
//   const square = squares[i];

//   square.addEventListener('click', () => {
//     square.innerHTML = 'X';
//   });
// }

const changeTurn = () => {
  isPlayer1Turn = !isPlayer1Turn;
  currentTurn = isPlayer1Turn ? player1 : player2;
};

const checkForDraw = () => {
  i++;

  if (i==9) {
    // show draw result
    const modal = document.getElementById('modal');

    // grab win result element
    // set innerHTML
    const winResult = document.getElementById('win-result');
    
    modal.classList.add('game-over');
    winResult.innerHTML = 'Draw';
  }
};


const setupSquare = (square) => {
  square.addEventListener('click', () => {
    square.innerHTML = currentTurn;

    changeTurn();

    checkForDraw();
  });
}

squaresArray.forEach(setupSquare);

/**
 * Make html with html elements
 * use js to play with them
 */