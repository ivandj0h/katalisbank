"use strict";

import * as fs from "fs";
import { vals, balanceUpdate } from "../helpers/json_val.js";
import { jsonReader } from "../helpers/json_read.js";
import { writeFileData } from "../helpers/json_create.js";
import promptSync from "prompt-sync";

const prompt = promptSync();

const getValuesFromFile = (data) => {
  const path = `./data/${data.name}.json`;
  const newValue = vals(`${data.name}`);

  jsonReader(path, (error, data) => {
    try {
      if (fs.existsSync(path)) {
        const { name, balance } = data;
        console.log(`Welcome, ${name} \nYour Balance is $${balance}`);
        const nextChoise = prompt("You have low Balance, deposit : ");
        console.log(`Your Balance is ${name}, $${nextChoise}`);
      } else {
        return writeFileData(newValue);
      }
    } catch (error) {
      console.error(error);
    }
  });
};
export { getValuesFromFile };
