"use strict";

import * as fs from "fs";
import { nextPrompted } from "../helpers/prompt_val.js";
import { vals } from "../helpers/json_val.js";

const newValue = vals();

const writeFileData = (newValue) => {
  const jsonString = JSON.stringify(newValue);

  fs.writeFile(`./data/${newValue.name}.json`, jsonString, (err) => {
    if (err) {
      console.log("Error writing file", err);
    } else {
      console.log(
        `Welcome, ${newValue.name} \nYour Balance is $${newValue.balance}`
      );
      nextPrompted(newValue);
    }
  });
};

export { writeFileData };
