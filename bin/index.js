#!/usr/bin/env node
const fs = require("fs");

const data = {
  name: "ivandi",
  age: 17,
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

console.log(`my name is ${data.name} and my age is ${data.age}`);
