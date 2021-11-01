"use strict";

import * as fs from "fs";

const jsonReader = (filePath, cb) => {
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
};

export { jsonReader };
