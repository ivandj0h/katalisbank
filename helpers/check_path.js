"use strict";

import * as fs from "fs";
import { logoutPrompt } from "../helpers/prompt_val.js";

const checkIfTargetPathExist = (targetName, pathName, data) => {
  const target = targetName;
  const path = pathName;

  try {
    if (fs.existsSync(path)) {
      return path;
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
