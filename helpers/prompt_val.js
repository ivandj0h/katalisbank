"use strict";

import fs from "fs";
import promptSync from "prompt-sync";
import inquirer from "inquirer";
import { checkBalanceUser } from "../controllers/Accounts.js";

const prompt = promptSync();

const userNamePrompted = () => prompt(`Please Enter Your Username : `);
const nextPrompted = (object) => {
  const { name, balance } = object;
  inquirer
    .prompt([
      {
        type: "list",
        name: "commands",
        message: "Choose Menu Below, use Arrow keys to navigate",
        choices: ["Deposit", "Check Balance", "Money Transfer", "Logout"],
      },
    ])
    .then((res) => {
      if (res.commands === "Logout") {
        console.log(`Goodbye, ${name}!`);
      } else {
        // console.info("Answer:", res.commands);
        checkBalanceUser(object);
      }
    });
};

export { userNamePrompted, nextPrompted };
