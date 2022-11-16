'use strict';

const checkBTN = document.querySelector('.btn');
const input = document.getElementById('date');
const result = document.getElementById('result');



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
     const date = input.value;
     const dateArr = date.split('-');
     let day = dateArr[2];

     if (day === undefined) {
          result.innerText = 'Please enter a date';
     } else if (isPrime(day)) {
          result.innerText = 'Your birthday is a prime number!';
          console.log(day);
     } else {
          result.innerText = 'Your birthday is not a prime number!';
     }
}

checkBTN.addEventListener('click', checkPrime);


// set windows reload after 20 seconds
setTimeout(function () {
     window.location.reload(1);
}, 20000);

