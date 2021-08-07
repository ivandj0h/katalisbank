"use strict";

import * as fs from "fs";
import { vals } from "../helpers/json_val.js";
import { jsonReader } from "../helpers/json_read.js";
import { writeFileData } from "../helpers/json_create.js";

const getValuesFromFile = (data) => {
  const path = `./data/${data.name}.json`;
  const newValue = vals(`${data.name}`);

  jsonReader(path, (error, data) => {
    try {
      if (fs.existsSync(path)) {
        console.log(`Welcome, ${data.name} \nYour Balance is $${data.balance}`);
      } else {
        return writeFileData(newValue);
      }
    } catch (error) {
      console.error(error);
    }
  });
};
export { getValuesFromFile };
