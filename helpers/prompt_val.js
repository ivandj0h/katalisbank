"use strict";

import fs from "fs";
import promptSync from "prompt-sync";

const prompt = promptSync();

const prompted = () => prompt(`Please Enter Your Username : `);

export { prompted };
