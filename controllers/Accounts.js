"use strict";

import * as fs from "fs";
import { jsonReader } from "../helpers/json_read.js";
import { jsonSaved } from "../helpers/json_create.js";

const getValuesFromFile = (data) => {
  const path = `./data/${data.name}.json`;

  jsonReader(path, (error, data) => {
    try {
      if (fs.existsSync(path)) {
        console.log(`Welcome, ${data.name} \nYour Balance is $${data.balance}`);
      } else {
        console.log("Your Data is Empty");
      }
    } catch (error) {
      console.error(error);
    }
  });
};

export { getValuesFromFile };
