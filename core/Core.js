"use strict";

class Core {
  constructor(name) {
    this.name = name;
  }

  welcomeGreeting() {
    return `Hello ${this.name}`;
  }

  getValueFromConsole() {
    return `${this.name}`;
  }
}

export { Core };
