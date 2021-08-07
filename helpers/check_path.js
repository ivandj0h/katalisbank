"use strict";

import * as fs from "fs";
import { logoutPrompt } from "../helpers/prompt_val.js";
import { transferAmountToTarget } from "../helpers/json_create.js";

const checkIfTargetPathExist = (targetName, pathName, amountName, data) => {
  const { name, balance } = data;
  const target = targetName;
  const path = pathName;
  const amounts = amountName;

  try {
    if (fs.existsSync(path)) {
      transferAmountToTarget(data, target, path, amounts);
    } else {
      console.log(
        `\u00A0 ${target}'s Account doesn't Exist yet, please create an account`
      );
      console.log(`\n`);
      logoutPrompt(data, target);
    }
  } catch (error) {
    console.log(error);
  }
};

export { checkIfTargetPathExist };
