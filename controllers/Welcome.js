"use strict";

import { Core } from "../core/Core.js";

class Welcome extends Core {
  constructor(name, balance) {
    super(name);

    this.balance = balance;
  }

  getData() {
    return `Hello ${this.name}, \nYour Balance is $${this.balance}
    `;
  }
}

export { Welcome };
