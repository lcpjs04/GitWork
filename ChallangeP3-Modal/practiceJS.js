'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const clicks = document.querySelectorAll('.clicks');
const closeButton = document.querySelector('.closeButton');

console.log(clicks);

const displayTextBox = function () {
  modal.classList.remove('hiddenText');
  overlay.classList.remove('hiddenText');
};
const hideTextBox = function () {
  modal.classList.add('hiddenText');
  overlay.classList.add('hiddenText');
};

for (let i = 0; i < clicks.length; i++) {
  console.log(clicks[i].textContent);

  clicks[i].addEventListener('click', displayTextBox);

  closeButton.addEventListener('click', hideTextBox);
  overlay.addEventListener('click', hideTextBox);

  // clicks[i].addEventListener('click', function () {
  //   console.log('Button Clicked!');
  //   modal.classList.remove('hiddenText');
  //   overlay.classList.remove('hiddenText');
  // });

  // closeButton.addEventListener('click', function () {
  //   console.log('Close Button Clicked!');
  //   modal.classList.add('hiddenText');
  //   overlay.classList.add('hiddenText');
  // });

  // overlay.addEventListener('click', function () {
  //   console.log('Overlay Clicked!');
  //   modal.classList.add('hiddenText');
  //   overlay.classList.add('hiddenText');
  // });
}
