/** @format */

"use strict";

const abRatio = 0.95;
const input = 52;

const abFactpr = (value) => {
  return value * abRatio;
};
// const abFactpr = new Function("value", "return ( value * abRatio )");

console.log(`abFactpr ${abFactpr(input)}`);
