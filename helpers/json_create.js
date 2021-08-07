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

const writeFileDataUpdated = (data, updateValues) => {
  const pathFile = `./data/${updateValues.name}.json`;
  const { name, balance } = data;
  const nbalance = parseInt(updateValues.balance);

  const combineBalanceDataValue = countValues(nbalance, parseInt(balance));
  const newBalance = {
    _id: 1,
    name,
    balance: combineBalanceDataValue,
  };

  fs.writeFile(pathFile, JSON.stringify(newBalance), (err) => {
    if (err) {
      console.log("Error writing file", err);
    } else {
      console.log(
        `\n\u00A0 Congradultion ${updateValues.name},\n\u00A0 You're sucessfully add $${updateValues.balance} to your Account, \n\u00A0 Now Your Balance is $${combineBalanceDataValue}`
      );
      console.log(`\n`);
      nextPrompted(updateValues);
    }
  });
};

function countValues(a, b) {
  return a + b;
}

export { writeFileData, writeFileDataUpdated };
