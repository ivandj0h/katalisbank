"use strict";

export default class Core {
  constructor(value) {
    this.value = value;
  }
  getValue() {
    console.log(`Your Inputs are ${this.value}`);
  }
}
