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

// controllers
const checkval = require("../controllers/readval");
const saveval = require("../controllers/saveval");

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

  const checkDataIfAlreadyExist = checkval.checkData(data);
  if (!checkDataIfAlreadyExist) {
    saveval.saveData(data);
  } else {
    console.log(checkDataIfAlreadyExist);
  }

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
