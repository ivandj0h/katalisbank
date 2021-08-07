"use strict";

// load the nodejs modules
const fs = require("fs");
const readJson = require("../helpers/readjson");
const checkval = require("../helpers/checkval");

const showData = (data) => {
  const path = `./data/${data.name}.json`;

  // read data from json
  readJson.jsonReader(path, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Hello, ${data.name}`);
      console.log(`Your balance is $${data.balance}`);
    }
    // const depositBalance = prompt("deposit : ");
    // console.log(`Your balance now is $${depositBalance}`);
  });
};
exports.showData = showData;
