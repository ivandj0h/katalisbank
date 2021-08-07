"use strict";

import fs from "fs";
import promptSync from "prompt-sync";
import inquirer from "inquirer";

const prompt = promptSync();

const userNamePrompted = () => prompt(`Please Enter Your Username : `);
const depositPrompted = () => {
  inquirer
    .prompt([
      {
        type: "checkbox",
        name: "commands",
        message: "Please Choose Menu Below",
        choices: ["Deposit", "Check Balance", "Money Transfer"],
      },
    ])
    .then((answers) => {
      console.info("Answer:", answers.commands);
    });
};

export { userNamePrompted, depositPrompted };
