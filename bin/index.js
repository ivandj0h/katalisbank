#!/usr/bin/env node

"use strict";

import { Core } from "../core/Core.js";
import { getValuesFromFile } from "../controllers/Accounts.js";
import { staticWelcomeScreenValueTitle } from "../helpers/static_val.js";
import { userNamePrompted } from "../helpers/prompt_val.js";
import { vals } from "../helpers/json_val.js";

const run = async () => {
  staticWelcomeScreenValueTitle();

  const getUserName = userNamePrompted();

  const getValueFromConsoleInput = new Core(getUserName);
  const newValue = vals(getValueFromConsoleInput.name);

  if (getValueFromConsoleInput.name !== "") {
    getValuesFromFile(newValue);
  } else {
    console.log(`\u00A0 Sorry, you didn't enter username, please try again!!`);
    process.exit(1);
  }
};

run();
