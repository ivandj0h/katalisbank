"use strict";

import fs from "fs";
import promptSync from "prompt-sync";

const prompt = promptSync();

const userNamePrompted = () => prompt(`Please Enter Your Username : `);
const depositPrompted = (value) => {
  prompt(`Enter Choise : `);
  console.log(value);
};

export { userNamePrompted, depositPrompted };
