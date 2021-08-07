"use strict";

import * as fs from "fs";
import { nextPrompted } from "../helpers/prompt_val.js";
import { vals, balanceUpdateVals } from "../helpers/json_val.js";

const newValue = vals();
const updateValues = balanceUpdateVals();

const writeFileData = (newValue) => {
  const pathFile = `./data/${newValue.name}.json`;
  const jsonString = JSON.stringify(newValue);

  fs.writeFile(pathFile, jsonString, (err) => {
    if (err) {
      console.log("Error writing file", err);
    } else {
      console.log(
        `\u00A0 Welcome, ${newValue.name} \nYour Balance is $${newValue.balance}`
      );
      nextPrompted(newValue);
    }
  });
};

const writeFileDataUpdated = (updateValues) => {
  const pathFile = `./data/${updateValues.name}.json`;
  const newBalance = updateValues;

  fs.writeFile(pathFile, JSON.stringify(newBalance), (err) => {
    if (err) {
      console.log("Error writing file", err);
    } else {
      console.log(
        `\n\u00A0 Your Balance is $${updateValues.balance} ${updateValues.name}`
      );
      nextPrompted(updateValues);
    }
  });
};

export { writeFileData, writeFileDataUpdated };
