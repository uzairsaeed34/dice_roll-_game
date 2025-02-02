'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1' );
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector('.dice');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;


const switchPlayer = function(){
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

const init = function(){
  scores= [0 , 0 ];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  diceEl.classList.add('hidden');
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
}

init();


btnRoll.addEventListener ('click', function(){
  if(playing) {
    const dice = Math.trunc (Math.random() * 6) + 1;
    console.log(dice);
  
  
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
  
    if(dice !== 1){
      currentScore += dice ;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  
    }
    else{
      switchPlayer();
      
    }
  }
});

btnHold.addEventListener('click', function(){
  if(playing) {
    console.log('hold btn');
    scores[activePlayer] += currentScore;
    // score[1] = score[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
  
    if(scores[activePlayer] >= 50){
      playing = false;
      diceEl.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    }
    else{
      switchPlayer();
    }
  }

});


btnNew.addEventListener('click' ,init);



