"use strict";

import fs from "fs";
import promptSync from "prompt-sync";
import inquirer from "inquirer";
import { balanceUpdateVals } from "../helpers/json_val.js";
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
        console.log(res.commands);
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
        // console.log(`\n`);
        // nextPrompted(data);
      }
    });
};

export { userNamePrompted, nextPrompted, depositPrompt };
