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
 let j=0;
 
 // Add functionality to each square to mark player's Xs or Os
 const squares = document.getElementsByClassName('symbol');
 
 const squaresArray = Array.from(squares); 
 
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
    i=i-9;

   }
 };
 const restart = document.getElementById('sub_btn');

const startgame = (square) =>{
  modal.classList.remove('game-over');
  squares.getElementsByClassName('symbol').innerHTML = "";

}
sub_btn.addEventListener('click',startgame);
 
 const setupSquare = (square) => {
   square.addEventListener('click', () => {
     square.innerHTML = currentTurn;
 
     changeTurn();
 
     checkForDraw();
     j=1;
   });
 }

 
 squaresArray.forEach(setupSquare);
 
 /**
  * Make html with html elements
  * use js to play with them
  */