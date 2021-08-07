#!/usr/bin/env node

"use strict";

// load the nodejs modules
const fs = require("fs");
const chalk = require("chalk");
const figlet = require("figlet");
const ps = require("prompt-sync");
const prompt = ps();

// get helper files
const readJson = require("../helpers/readjson");

console.log(
  chalk.whiteBright(
    figlet.textSync("dkatalis bank", {
      horizontalLayout: "default",
      verticalLayout: "default",
    })
  )
);

const getName = prompt("enter username : ");

if (getName !== "") {
  const data = {
    name: getName,
    balance: 0,
  };

  const saveData = (data) => {
    const finished = (error) => {
      if (error) {
        console.error(error);

        return;
      }
    };
    const jsonData = JSON.stringify(data, null, 2);

    fs.writeFile(`./data/${data.name}.json`, jsonData, finished);
  };
  saveData(data);

  // read data from json
  readJson.jsonReader(`./data/${data.name}.json`, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Hello, ${data.name}`);
      console.log(`Your balance is $${data.balance}`);
    }
    const depositBalance = prompt("deposit : ");
    console.log(`Your balance now is $${depositBalance}`);
  });
} else {
  console.log(`Sorry, you didn't enter username, please try again!!`);
  process.exit(1);
}
