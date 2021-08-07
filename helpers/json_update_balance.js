"use strict";

import * as fs from "fs";
import { vals } from "../helpers/json_val.js";

var jsonArray = '{"required":1, "minlength":2}';
var jsonParsedArray = JSON.parse(jsonArray);
for (key in jsonParsedArray) {
  if (jsonParsedArray.hasOwnProperty(key)) {
    console.log("%c " + key + " = " + jsonParsedArray[key], "color:cyan");
  }
}
