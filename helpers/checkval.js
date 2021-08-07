// helper function to check if data (value) already exist in json
const _isContains = (json, value) => {
  let contains = false;
  Object.keys(json).some((key) => {
    contains =
      typeof json[key] === "object"
        ? _isContains(json[key], value)
        : json[key] === value;
    return contains;
  });
  return contains;
};

exports._isContains = _isContains;
