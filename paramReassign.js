/** @format */

"use strict";

// const bonusResult = (input) => {
//   if (input <= 100) {
//     input = 100;
//   }
//   if (input > 100 && input < 500) {
//     input = 100 * 1.5;
//   } else if (input >= 500) {
//     input = input * 2;
//   }
//   return input;
// };

const bonusResult = (input) => {
  let result;
  if (input <= 100) {
    result = 100;
  }
  if (input > 100 && input < 500) {
    result = input * 1.5;
  } else if (input >= 500) {
    result = input * 2;
  }
  const difference = result - input;

  return [result, difference];
};

console.log(bonusResult(50));
console.log(bonusResult(150));
console.log(bonusResult(500));
