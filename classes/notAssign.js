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
    return this;
  }
  calcShipping() {
    if (this.total > 50) {
      this.shipping = 5;
    } else {
      this.shipping = 10;
    }
    return this;
  }
  calcGrandTotal() {
    if (this.taxt && this.shipping) {
      this.grandTotal = this.total + this.taxt + this.shipping;
    }
    return this;
  }
}

const curenntCart = new Cart({ user: loggedInuser });

curenntCart.total = 100;

// curenntCart.calcTax(taxRate);
// curenntCart.calcShipping();
// curenntCart.calcGrandTotal();

// The next statement (chain) is allowed because we return this after each statement, if you ommit return this, it wont work.
curenntCart.calcTax(taxRate).calcShipping().calcGrandTotal();
console.log(curenntCart);
