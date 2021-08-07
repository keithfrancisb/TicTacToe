/**
 * Board functionality
 *  - alternate Xs and Os on the board
 * 
 * Turn Tracker
 *  - alternate turn indication
 * 
 * Show Winner result
 */

const player1Name = 'Player 1';
const player2Name = 'Player 2';

const player1 = 'X';
const player2 = 'O';

let isPlayer1Turn = true;
let currentTurn = isPlayer1Turn ? player1 : player2;

let turnsMade = 0;

// Add functionality to each square to mark player's Xs or Os
const squares = document.getElementsByClassName('symbol');
const turn = document.getElementById('turn');

const squaresArray = Array.from(squares);

const changeTurn = () => {
  isPlayer1Turn = !isPlayer1Turn;
  currentTurn = isPlayer1Turn ? player1 : player2;
  turn.innerHTML = isPlayer1Turn ? 'Player 1 Turn' : 'Player 2 Turn';
};

const checkForDraw = (turnsMade) => {
  if (turnsMade >= 9) {
    // show draw result
    const modal = document.getElementById('modal');

    // grab win result element
    // set innerHTML
    const winResult = document.getElementById('win-result');
    
    modal.classList.add('game-over');
    winResult.innerHTML = 'Draw';
  }
};

const checkForWinner = () => {
  const winningPatterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

  // let hasWinner = false;

  // for (let i=0; i<winningPatterns.length; i++) {
  //   const pattern = winningPatterns[i];

  //   let xCount = 0;
  //   let oCount = 0;

  //   for (let j=0; j<pattern.length; j++) {
  //     const squareIdx = pattern[j];
  //     const square = squares[squareIdx];

  //     if (square.innerHTML == player1) {
  //       xCount++;
  //     }
  //     if (square.innerHTML == player2) {
  //       oCount++;
  //     }
  //   }

  //   if (xCount == 3) {
  //     hasWinner = true;
  //     break;
  //   }
  //   if (oCount == 3) {
  //     hasWinner = true;
  //     break;
  //   }
  // }

  // alternate and more readable way of doing the for loop above
  const winner = winningPatterns.reduce((acc, pattern) => {
    const didPlayer1Win = pattern.every(squareIdx => {
      return squares[squareIdx].innerHTML === player1;
    });

    const didPlayer2Win = pattern.every(squareIdx => {
      return squares[squareIdx].innerHTML === player2;
    });

    if (didPlayer1Win) return player1Name;
    if (didPlayer2Win) return player2Name;

    return acc;
  }, null);
  
  if (winner) {
    const modal = document.getElementById('modal');

    const winResult = document.getElementById('win-result');
    
    modal.classList.add('game-over');
    winResult.innerHTML = winner + ' wins!';

    return true;
  }
  return false;
};

const restartButton = document.getElementById('restart-button');

const startGame = () => {
  modal.classList.remove('game-over');
  squaresArray.forEach(input => input.innerHTML ='');
  turnsMade=0;
};

restartButton.addEventListener('click', startGame);

const setupSquare = (square) => {
  square.addEventListener('click', () => {
    square.innerHTML = currentTurn;

    turnsMade++;
    changeTurn();
    const hasWinner = checkForWinner();
    if (!hasWinner) checkForDraw(turnsMade);
  });
};
 
squaresArray.forEach(setupSquare);
