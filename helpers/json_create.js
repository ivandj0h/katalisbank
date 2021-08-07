"use strict";

import * as fs from "fs";
import { vals } from "../helpers/json_val.js";

const newValue = vals();

const writeFileData = (newValue) => {
  const jsonString = JSON.stringify(newValue);

  //   console.log(jsonString);

  fs.writeFile(`./data/${newValue.name}.json`, jsonString, (err) => {
    if (err) {
      console.log("Error writing file", err);
    } else {
      console.log("Successfully wrote file");
    }
  });

  //   return data;
};

export { writeFileData };
