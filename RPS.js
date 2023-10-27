
let score= JSON.parse(localStorage.getItem
  ('score')) || {

  wins:0,
  losses:0,
  ties:0,
  total:0, 
};

 updateScoreElement();

 let isAutoPlaying = false;
 let intervalID;

 //const autoPlay = () => {

 //};

 function autoPlay() {
  if(!isAutoPlaying) {
    intervalId = setInterval(()=> {
      const playerMove = pickComputerMove()
      playGame(playerMove);
   }, 2000);
  isAutoPlaying = true;
 } else {
     clearInterval(intervalId);
     isAutoPlaying = false;
 }
}


 
function playGame(playerMove) {
const computerMove=pickComputerMove();

  let result = '';

  if (playerMove === 'SCISSORS') {

  if (computerMove === 'ROCK') {
    result = 'YOU LOOSE!';
  } else if (computerMove ==='SCISSORS') {result = 'it is a TIE!'}
  if (computerMove === 'PAPER') {
    result = 'YOU WIN!';
  }
  } 
  
  else if (playerMove === 'ROCK') {
  if (computerMove === 'ROCK') {
  result = 'it is a TIE!';
  } else if (computerMove ==='SCISSORS') {result = 'YOU WIN!'}
  if (computerMove === 'PAPER') {
  result = 'YOU LOOSE!';
  }
  }
  
  else if (playerMove === 'PAPER') {
  if (computerMove === 'ROCK') {
  result = 'YOU WIN!';
  } else if (computerMove ==='SCISSORS') {result = 'YOU LOOSE!';}
  if (computerMove === 'PAPER') {
  result = 'it is a TIE!';
  }
  }

  if(result==='YOU WIN!') {
    score.wins += 1;
  }

  else if(result==='YOU LOOSE!') {
    score.losses += 1;
  }

  else if(result==='it is a TIE!'){
    score.ties += 1;
  }

  score.total += 1;

  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();

  document.querySelector('.js-result')
  .innerHTML=result;
    
  document.querySelector('.js-moves')
  .innerHTML=`    YOU
<img class="move-icon" src="images/${playerMove}-emoji.png" alt="">
vs
<img class="move-icon" src="images/${computerMove}-emoji.png" alt="">
NORSANG`;
  
  }

 function updateScoreElement() {
 document.querySelector('.js-score')
 .innerHTML = `wins: (${score.wins})  Losses: (${score.losses})  Ties: (${score.ties})   Number of Games:(${score.total})`;
  }           

  let computerMove = '';

  function pickComputerMove() {
  const randomNumber= Math.random();



  if (randomNumber >= 0 && randomNumber < 1/3 ) {
    computerMove = 'ROCK';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'PAPER';
  } else {
    computerMove = 'SCISSORS';
  } 
  return computerMove;
}  