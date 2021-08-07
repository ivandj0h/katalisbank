"use strict";

import fs from "fs";
import promptSync from "prompt-sync";
import inquirer from "inquirer";
import { balanceUpdateVals } from "../helpers/json_val.js";
import { checkIfTargetPathExist } from "../helpers/check_path.js";
import {
  checkBalanceUser,
  updateBalanceUser,
} from "../controllers/Accounts.js";

const prompt = promptSync();

const userNamePrompted = () => prompt(`Please Enter Your Username : `);
const nextPrompted = (object) => {
  const { name, balance } = object;
  inquirer
    .prompt([
      {
        type: "list",
        name: "commands",
        message: "Please select the menu below according to your needs ",
        choices: ["Check Balance", "Deposit", "Transfer", "Logout"],
      },
    ])
    .then((res) => {
      if (res.commands === "Logout") {
        console.log(`\u00A0 Goodbye, ${name}!`);
      } else if (res.commands === "Deposit") {
        depositPrompt(object);
      } else if (res.commands === "Transfer") {
        transferAmountPrompt(object);
      } else {
        checkBalanceUser(object);
      }
    });
};

const depositPrompt = (data) => {
  const { name, balance } = data;
  inquirer
    .prompt([
      {
        name: "depositCommand",
        message: "Enter your deposit amount : ",
      },
    ])
    .then((res) => {
      const { depositCommand } = res;
      const updateValues = balanceUpdateVals(`${name}`, `${depositCommand}`);

      if (depositCommand === "") {
        console.log(`\n`);
        console.log(
          `\u00A0 Sorry ${name}, you didn't enter any Value, please try again!!`
        );
        console.log(`\n`);
        nextPrompted(data);
      } else {
        updateBalanceUser(data, updateValues);
      }
    });
};

const transferAmountPrompt = (data) => {
  const { name, balance } = data;

  inquirer
    .prompt([
      {
        name: "target",
        message: "Enter the target of your fund transfer : ",
      },
      {
        name: "amount",
        message: "Enter the amount of transfer : ",
      },
    ])
    .then((res) => {
      const { target, amount } = res;
      const targetPath = `./data/${target}.json`;

      checkIfTargetPathExist(target, targetPath, data);
    });
};

const logoutPrompt = (data, val) => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "logout",
        message: `To create new account for ${val}, Would you like to Logout?`,
        choices: ["Yes", "No"],
      },
    ])
    .then((res) => {
      const { logout } = res;
      if (logout === "Yes") {
        console.log(`\u00A0 You're Sucessfully Logout`);
        process.exit(1);
      } else {
        nextPrompted(data);
      }
    });
};

export {
  userNamePrompted,
  nextPrompted,
  depositPrompt,
  transferAmountPrompt,
  logoutPrompt,
};
