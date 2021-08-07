"use strict";

class Core {
  constructor(name) {
    this.name = name;
  }

  welcomeGreeting() {
    return `\u00A0 Hello ${this.name}`;
  }

  getValueFromConsole() {
    return `${this.name}`;
  }
}

export { Core };
