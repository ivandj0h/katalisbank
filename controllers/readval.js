"use strict";

// load the nodejs modules
const fs = require("fs");
const readJson = require("../helpers/readjson");
const checkval = require("../helpers/checkval");
const saveval = require("../controllers/saveval");

const checkData = (data) => {
  const path = `./data/${data.name}.json`;

  const chkVal = checkval._isContains(data.name, "name");
  readJson.jsonReader(path, (err, data) => {
    try {
      if (fs.existsSync(path)) {
        console.log(`Hello, ${data.name}`);
        console.log(`Your balance is $${data.balance}`);
        // return `Hello, ${data.name}`;
      } else {
        saveval.saveData(data);
      }
    } catch (err) {
      console.error(err);
    }
  });
};
exports.checkData = checkData;
