"use strict";

const vals = (newValueInputFromUser) => {
  const newValue = {
    _id: 1,
    name: newValueInputFromUser,
    balance: 0,
  };

  return newValue;
};

const balanceUpdate = (newValueInputFromUser, newBalanceInputFromUser) => {
  const newValue = {
    _id: 1,
    name: newValueInputFromUser,
    balance: newBalanceInputFromUser,
  };

  return newValue;
};

export { vals, balanceUpdate };
