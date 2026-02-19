const removeFromArray = function (arr, ...values) {
  for (let val of values) {
    arr = arr.filter((x) => x != val);
  }

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
