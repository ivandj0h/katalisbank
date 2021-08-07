"use strict";

// load the nodejs modules
const fs = require("fs");
const readJson = require("../helpers/readjson");
const checkval = require("../helpers/checkval");

const checkData = (data) => {
  const path = `./data/${data.name}.json`;

  readJson.jsonReader(path, (err, data) => {
    try {
      if (fs.existsSync(path)) {
        return;
      }
    } catch (err) {
      console.error(err);
    }
  });
};
exports.checkData = checkData;
