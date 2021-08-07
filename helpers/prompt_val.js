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
        choices: ["Check Balance", "Deposit", "Transfer", "Logout"],
      },
    ])
    .then((res) => {
      if (res.commands === "Logout") {
        console.log(`Goodbye, ${name}!`);
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
      if (depositCommand === "") {
        console.log(`Goodbye, ${name}!`);
      } else {
        console.info(
          `Congratulations, you have successfully deposited with Amount : $${depositCommand} \n`
        );
        nextPrompted(data);
      }
    });
};

export { userNamePrompted, nextPrompted, depositPrompt };
