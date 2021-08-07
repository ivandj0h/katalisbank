#!/usr/bin/env node

"use strict";

import { Core } from "../core/Core.js";
import { getValuesFromFile } from "../controllers/Accounts.js";
import { staticWelcomeScreenValueTitle } from "../helpers/static_val.js";
import { prompted } from "../helpers/prompt_val.js";

const run = async () => {
  staticWelcomeScreenValueTitle();

  const getUserName = prompted();

  const getValueFromConsoleInput = new Core(getUserName);

  const data = {
    _id: 1,
    name: getValueFromConsoleInput.name,
    balance: 0,
  };

  getValuesFromFile(data);
};

run();
