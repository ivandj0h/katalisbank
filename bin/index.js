#!/usr/bin/env node

"use strict";

import Core from "../core/Core.js";

const appRun = () => {
  const inputValue = new Core("juna");

  inputValue.getValue();
};

appRun();
