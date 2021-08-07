#!/usr/bin/env node

"use strict";

import { Core } from "../core/Core.js";
import { getValuesFromFile } from "../controllers/Accounts.js";
import { staticWelcomeScreenValueTitle } from "../helpers/static_val.js";
import { userNamePrompted, depositPrompted } from "../helpers/prompt_val.js";
import { vals } from "../helpers/json_val.js";

const run = async () => {
  staticWelcomeScreenValueTitle();

  const getUserName = userNamePrompted();
  // const askDeposit = depositPrompted();

  const getValueFromConsoleInput = new Core(getUserName);
  const newValue = vals(getValueFromConsoleInput.name);

  if (getValueFromConsoleInput.name !== "") {
    // depositPrompted();
    // getValuesFromFile(newValue);

    const commands = "login";

    switch (commands) {
      case "deposit":
        console.log("Oranges are $0.59 a pound.");
        break;
      case "Mangoes":
      case "Papayas":
        console.log("Mangoes and papayas are $2.79 a pound.");
        break;
      default:
        getValuesFromFile(newValue);

      // depositPrompted();
    }
  } else {
    console.log(`Sorry, you didn't enter username, please try again!!`);
    process.exit(1);
  }
};

run();
