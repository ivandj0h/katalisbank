#!/usr/bin/env node

"use strict";

// load the nodejs modules
const fs = require("fs");
const ps = require("prompt-sync");
const prompt = ps();

const getDeposit = prompt("deposit ");

const data = {
  name: getDeposit,

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

  fs.writeFile("data.json", jsonData, finished);
};

saveData(data);

// helper function to read data from json
function jsonReader(filePath, cb) {
  fs.readFile(filePath, "utf-8", (err, fileData) => {
    if (err) {
      return cb && cb(err);
    }
    try {
      const obj = JSON.parse(fileData);

      return cb && cb(null, obj);
    } catch (err) {
      return cb && cb(err);
    }
  });
}

// read data from json
jsonReader("./data.json", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Hello, ${data.name}`);
    console.log(`Your balance is $${data.balance}`);
  }
});
