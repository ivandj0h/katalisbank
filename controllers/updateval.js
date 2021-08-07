"use strict";

// load the nodejs modules
const fs = require("fs");

// Update Value in json
const setBalance = (id, newBalance) => {
  for (var i = 0; i < jsonObj.length; i++) {
    if (jsonObj[i]._id === id) {
      jsonObj[i].balance = newBalance;
      return;
    }
  }
};
