/** @format */

"use strict";

const values = [16, 7, 55];

const projection = function (array) {
  const max = array.reduce((a, b) => Math.max(a, b));

  let result;
  if (max < 10) {
    result = "Poor";
  } else if (max < 100) {
    result = "Fair";
  } else {
    result = "Good";
  }

  return result;
};

console.log(projection(values));

/** @format */

// const values = [16, 7, 55];
// function projection(array, result = 0) {
//   const max = array.reduce(function (a, b) {
//     return Math.max(a, b);
//   });
//   if (max < 10) {
//     result = "Poor";
//   } else if (max < 100) {
//     result = "Fair";
//   } else {
//     result = "Good";
//   }
//   return result;
// }

// console.log(projection(values));
