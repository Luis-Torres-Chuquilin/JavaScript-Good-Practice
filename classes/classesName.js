/** @format */

"use strict";

const loggedInUser = "dosds";

class Cart {
  constructor(options) {
    this.user = options.user;
  }
}

// const curremtCart = new cart({ user: loggedInUser  });
const curremtCart = new Cart({ user: loggedInUser });

console.log(curremtCart);
