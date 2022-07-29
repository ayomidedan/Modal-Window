'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

//same way as below cancled (1)
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  // console.log('button clicked');
};
for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal);

// same thing as top but in a short formal way in below canceled (2)
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// below canceled 1
/*
for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', function () {
    console.log('button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
  */

//same code we can pass into a function for short form and a formal way. Below caneled 2
/* 
btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

btnCloseModal.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  });
*/

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
