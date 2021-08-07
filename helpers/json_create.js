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
        `\u00A0 Welcome, ${newValue.name} \n\u00A0 Your Balance is $${newValue.balance}`
      );
      console.log(`\n`);
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

const transferAmountToTarget = (data, target, path, newVal) => {
  const { name, balance } = data;
  const Tgt = target;
  const pathTarget = path;
  const selfPath = `./data/${name}.json`;
  const xbalance = parseInt(newVal);

  if (parseInt(balance) <= 0) {
    console.log(
      `\u00A0 Sorry ${name}, you don't have enough Money, please Deposit before Transfer`
    );
  } else if (parseInt(balance) < xbalance) {
    console.log(
      `\u00A0 Sorry ${name}, you don't have enough Money, please Deposit before Transfer`
    );
  } else {
    const combineTransferBalanceDataValue = countValues(
      xbalance,
      parseInt(balance)
    );
    const combineReminingBalanceDataValue = substractValues(
      parseInt(balance),
      xbalance
    );
    const newBalance = {
      _id: 1,
      name: Tgt,
      balance: combineTransferBalanceDataValue,
    };

    const remainingBalance = {
      _id: 1,
      name,
      balance: combineReminingBalanceDataValue,
    };

    updateBalanceTargetValues(
      pathTarget,
      newBalance,
      combineTransferBalanceDataValue
    );

    updateBalanceRemainingValues(
      selfPath,
      remainingBalance,
      combineReminingBalanceDataValue
    );
  }
};

function countValues(a, b) {
  return a + b;
}

function substractValues(a, b) {
  return a - b;
}

function updateBalanceTargetValues(objPath, objVal, bal) {
  fs.writeFile(objPath, JSON.stringify(objVal), (err) => {
    if (err) {
      console.log("Error writing file", err);
    } else {
      return;
    }
  });
}

function updateBalanceRemainingValues(objPath, objVal, bal) {
  fs.writeFile(objPath, JSON.stringify(objVal), (err) => {
    if (err) {
      console.log("Error writing file", err);
    } else {
      console.log(
        `\n\u00A0 Sucessfully Transfered, \n\u00A0 Now Your Balance is $${bal}`
      );
      console.log(`\n`);
      nextPrompted(objVal);
    }
  });
}

export { writeFileData, writeFileDataUpdated, transferAmountToTarget };
