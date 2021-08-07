// load the nodejs modules
const fs = require("fs");

// helper function to read data from json
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

exports.jsonReader = jsonReader;
