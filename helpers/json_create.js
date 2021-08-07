"use strict";

import * as fs from "fs";

const jsonSaved = (data) => {
  const finished = (error) => {
    if (error) {
      console.error(error);

      return;
    }
  };
  const jsonData = JSON.stringify(data, null, 2);

  fs.writeFile(`./data/${data.name}.json`, jsonData, finished);
};

export { jsonSaved };
