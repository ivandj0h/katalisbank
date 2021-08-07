"use strict";

const vals = (newValueInputFromUser) => {
  const newValue = {
    _id: 1,
    name: newValueInputFromUser,
    balance: 0,
  };

  return newValue;
};

const balanceUpdateVals = (newValueInputFromUser, newBalanceInputFromUser) => {
  const updateBalanceValue = {
    _id: 1,
    name: newValueInputFromUser,
    balance: newBalanceInputFromUser,
  };

  return updateBalanceValue;
};

export { vals, balanceUpdateVals };
