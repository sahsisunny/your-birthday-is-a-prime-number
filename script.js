'use strict';

const checkBTN = document.querySelector('.btn');
const input = document.getElementById('date');
const result = document.getElementById('result');

const date = input.value;
const dateArr = date.split('-');
let day = dateArr[2];


function isPrime(day) {
     if (day < 2) {
          return false;
     }
     for (let i = 2; i < day; i++) {
          if (day % i === 0) {
               return false;
          }
     }
     return true;
}

function checkPrime() {
     if (day === '') {
          result.innerText = 'Please enter a date';
     } if (isPrime(day)) {
          result.innerText = 'Your birthday is a prime number!';
     } else {
          result.innerText = 'Your birthday is not a prime number!';
     }
}

checkBTN.addEventListener('click', checkPrime);
