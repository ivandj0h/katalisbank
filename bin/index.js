#!/usr/bin/env node

"use strict";

import { Core } from "../core/Core.js";
import { Welcome } from "../controllers/Welcome.js";
import { staticWelcomeScreenValueTitle } from "../helpers/static_val.js";
import { prompted } from "../helpers/prompt_val.js";

const run = async () => {
  // show script introduction
  staticWelcomeScreenValueTitle();

  const getUserName = prompted();

  // Login Session
  const getValueFromConsoleInput = new Core(getUserName);
  console.log(getValueFromConsoleInput.welcomeGreeting());
  // console.log(getValueFromConsoleInput.getValueFromConsole());

  // create the file
  // show success message
};

run();
