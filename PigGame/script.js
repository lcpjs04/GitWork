'strict';

const dice = document.querySelector('.rollD');
const newG = document.querySelector('.newGame');
let p0Total = document.querySelector('#p0--Total');
let p0Current = document.getElementById('p0--Current');
let p1Total = document.querySelector('#p1--Total');
let p1Current = document.getElementById('p1--Current');
const hold = document.querySelector('.holdD');
let image = document.querySelector('.dice');

const activePlayer = document.querySelector('.activePlayer'); //SECT. LIGHT BLUE

const player0 = document.querySelector('.sect--0'); //MAIN BOX Player 0
const player1 = document.querySelector('.sect--1'); //MAIN BOX Player 1

let playing = true;

let addingScores = 0;
let totalScores = [0, 0];
let playingNow = 0;

const onLoadFunct = function () {
  p0Total.textContent = 0;
  p0Current.textContent = 0;
  p1Total.textContent = 0;
  p1Current.textContent = 0;
};

newG.addEventListener('click', function () {
  playing = true;
  p0Total.textContent = 0;
  p0Current.textContent = 0;
  p1Total.textContent = 0;
  p1Current.textContent = 0;
  addingScores = 0;
  totalScores = [0, 0];
  image.classList.add('hidden');
  player0.classList.add('activePlayer'); //COLOUR
  player0.classList.remove('winner');
  player1.classList.remove('activePlayer'); //COLOUR
  player1.classList.remove('winner');
});

// START WITH HIDDEN DICE

dice.addEventListener('click', function () {
  if (playing) {
    numbRoll = Math.trunc(Math.random() * 6) + 1;

    image.src = `roll-${numbRoll}.png`;
    image.classList.remove('hidden');

    if (numbRoll != 1) {
      addingScores += numbRoll;

      document.getElementById(
        `p${playingNow}--Current`
      ).textContent = addingScores;
    } else {
      addingScores = 0;

      document.getElementById(
        `p${playingNow}--Current`
      ).textContent = addingScores;

      playingNow = playingNow === 0 ? 1 : 0;

      player0.classList.toggle('activePlayer'); //LIGHT BLUE COLOUR
      player1.classList.toggle('activePlayer'); //LIGHT BLUE COLOUR
    }
  }
});

hold.addEventListener('click', function () {
  if (playing) {
    totalScores[playingNow] += addingScores;

    document.getElementById(`p${playingNow}--Total`).textContent =
      totalScores[playingNow];

    addingScores = 0;
    document.getElementById(
      `p${playingNow}--Current`
    ).textContent = addingScores;

    // HIDE DICE
    image.classList.add('hidden');

    if (totalScores[playingNow] >= 20) {
      playing = false;
      // Player WINS
      document.querySelector(`.sect--${playingNow}`).classList.add('winner');
    } else {
      // SWITCH PLAYER!!!!
      playingNow = playingNow === 0 ? 1 : 0;

      player0.classList.toggle('activePlayer'); //LIGHT BLUE COLOUR
      player1.classList.toggle('activePlayer'); //LIGHT BLUE COLOUR
    }
  }
});
