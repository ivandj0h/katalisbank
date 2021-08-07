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
const showval = require("../controllers/showval");
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
    _id: 1,
    name: getName,
    balance: 0,
  };
  checkval.checkData(data);
  // const checkDataIfAlreadyExist = checkval.checkData(data);
  // if (!checkDataIfAlreadyExist) {
  //   checkval.checkData(data);
  // } else {
  //   console.log(`Welcome new User`);
  // }
} else {
  console.log(`Sorry, you didn't enter username, please try again!!`);
  process.exit(1);
}
