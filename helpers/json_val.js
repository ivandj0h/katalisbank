"use strict";

const vals = (newValueInputFromUser) => {
  const newValue = {
    _id: 1,
    name: newValueInputFromUser,
    balance: 0,
  };

  return newValue;
};

export { vals };
