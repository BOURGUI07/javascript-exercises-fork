const convertToCelsius = function (val) {
  return (val - 32) * (5 / 9);
};

const convertToFahrenheit = function (val) {
  return (val * 5) / 9 + 32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
