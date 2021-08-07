"use strict";

// load the nodejs modules
const fs = require("fs");

// saving in json
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

exports.saveData = saveData;
