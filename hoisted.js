/** @format */

"use strict";

const today = new Date();

// To see how hoisted works  descomment -> 1 , 2  comment --> 3 , 4 , then comment 1 and descomment 4
// comment ->  2, 4  descomment --> 1 , 3  , it will trigger and error.

// const weekAgo = weekAgoDate();  // 1

// function weekAgoDate() {
//   const date = new Date();
//   date.setDate(date.getDate() - 7);
//   return date;
// } // 2

const weekAgoDate = function () {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  return date;
}; // 3

const weekAgo = weekAgoDate(); // 4

console.log(today);
console.log(weekAgo);
