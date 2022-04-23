/** @format */

"use strict";

const projections = [15, 32, 17, 22];

// const bestCase = projections.map(function (proj) {
//   return (proj * 1.32).toFixed(3);
// });

// const bestCase = projections.map( proj =>  return (proj * 1.32).toFixed(3) )

// const bestCase = projections.map( proj =>  {return (proj * 1.32).toFixed(3)} )

// const bestCase = projections.map((proj) => proj);
// or
const bestCase = projections.map((proj) => (proj * 1.32).toFixed(3));

console.log(bestCase);
