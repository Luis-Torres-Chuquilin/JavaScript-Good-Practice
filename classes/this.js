/** @format */

"use strict";

const loggedInuser = "dadad";
const taxRate = 0.075;

class Cart {
  constructor(options) {
    this.user = options.user;
    this.taxt = 2;
  }

  calcTax(rate) {
    this.taxt = this.total * rate;
  }
}

// const calcTax = (rate) => {
//   this.taxt = this.total * rate;
// };

const curenntCart = new Cart({ user: loggedInuser });

curenntCart.total = 100;
curenntCart.calcTax(taxRate);

console.log(curenntCart);
