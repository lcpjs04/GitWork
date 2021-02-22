const resetHighScore = Number(
  (document.querySelector('.hScore').textContent = '0')
);
console.log(resetHighScore, typeof resetHighScore);

let highScore = 0;

const guess = function (text) {
  document.querySelector('.startGuessing').textContent = text;
};
const myScore = function (text) {
  document.querySelector('.myScore').textContent = text;
};

const startButton = document
  .querySelector('.btnStart')
  .addEventListener('click', function () {
    let score = 20;

    let random = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.que').textContent = '?';
    document.querySelector('.inputField').value = '';
    guess('Start Guessing....');
    // document.querySelector('.startGuessing').textContent = 'Start Guessing....';
    // document.querySelector('.myScore').textContent = score;
    myScore(score);
    document.querySelector('body').style = '';
    document.querySelector('.que').style.width = '';

    const checkButton = document
      .querySelector('.btnCheck')
      .addEventListener('click', function () {
        let input = Number(document.querySelector('.inputField').value);
        // change user Input value from String to Number
        console.log(input, typeof input);

        // When there is No Number or if value is 0 in Text Box
        if (!input) {
          // document.querySelector('.startGuessing').textContent = 'Enter Number!';
          guess('Enter Number!');
          // When an Invalid Number is entered
        } else if (input < 1 || input > 20) {
          if (score > 1) {
            score = score - 1;
            // document.querySelector('.startGuessing').textContent =
            //   'Invalid Number!';
            guess('Invalid Number!');
            // document.querySelector('.myScore').textContent = score;
            myScore(score);
          } else {
            // document.querySelector('.startGuessing').textContent =
            //   'You Loose...Game Over!';
            guess('You Loose...Game Over!');
            // document.querySelector('.myScore').textContent = 0;
            myScore(0);
          }
          // } else if (input !== random) {
          //   if (score > 1) {
          //     document.querySelector('.startGuessing').textContent =
          //       input > random ? 'Too High' : 'Too Low';
          //     score--;
          //     document.querySelector('.myScore').textContent = score;
          //   } else {
          //     document.querySelector('.startGuessing').textContent = 'You Loose!';
          //     document.querySelector('.myScore').textContent = 0;
          //   }

          // If Number Entered is Too Low
        } else if (input < random) {
          if (score > 1) {
            score = score - 1;
            // document.querySelector('.startGuessing').textContent = 'Too Low!';
            guess('Too Low!');
            // document.querySelector('.myScore').textContent = score;
            myScore(score);
          } else {
            // document.querySelector('.startGuessing').textContent =
            //   'You Loose...Game Over!';
            guess('You Loose...Game Over!');
            // document.querySelector('.myScore').textContent = 0;
            myScore(0);
          }

          // If Number Entered is Too High
        } else if (input > random) {
          if (score > 1) {
            score--;
            // document.querySelector('.startGuessing').textContent = 'Too High!';
            guess('Too High!');
            // document.querySelector('.myScore').textContent = score;
            myScore(score);
          } else {
            // document.querySelector('.startGuessing').textContent =
            //   'You Loose...Game Over!';
            guess('You Loose...Game Over!');
            // document.querySelector('.myScore').textContent = 0;
            myScore(0);
          }

          // If Number Entered is CORRECT
        } else if (input === random) {
          // document.querySelector('.startGuessing').textContent =
          //   'Correct Number!';
          guess('Correct Number!');
          document.querySelector('.que').textContent = random;
          // document.querySelector('.myScore').textContent = score;
          myScore(score);
          document.querySelector('body').style.backgroundColor =
            'rgb(83, 202, 53)';
          document.querySelector('.que').style.width = '30rem';

          // Configuring High Score
          if (score > highScore) {
            highScore = score;
            document.querySelector('.hScore').textContent = highScore;
          }
        }
      });
  });
