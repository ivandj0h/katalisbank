"use strict";

import * as fs from "fs";
import promptSync from "prompt-sync";
import { vals } from "../helpers/json_val.js";
import { jsonReader } from "../helpers/json_read.js";
import { writeFileData } from "../helpers/json_create.js";
import { nextPrompted } from "../helpers/prompt_val.js";

const prompt = promptSync();

const getValuesFromFile = (data) => {
  const path = `./data/${data.name}.json`;
  const newValue = vals(`${data.name}`);

  jsonReader(path, (error, data) => {
    try {
      if (fs.existsSync(path)) {
        const { name, balance } = data;
        console.log(`Welcome, ${name} \nYour Balance is $${balance}`);
        nextPrompted(data);
      } else {
        return writeFileData(newValue);
      }
    } catch (error) {
      console.error(error);
    }
  });
};

const checkBalanceUser = (data) => {
  const path = `./data/${data.name}.json`;
  jsonReader(path, (error, data) => {
    try {
      if (fs.existsSync(path)) {
        const { name, balance } = data;
        console.log(`Hello, ${name}, Your Balance is $${balance} \n`);
        nextPrompted(data);
      } else {
        nextPrompted(data);
      }
    } catch (error) {
      console.error(error);
    }
  });
};

export { getValuesFromFile, checkBalanceUser };
