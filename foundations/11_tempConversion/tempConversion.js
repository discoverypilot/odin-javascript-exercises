const convertToCelsius = function(tempF) {
  let tempC = (tempF - 32) * (5/9);
  return tempC;
};

const convertToFahrenheit = function(tempC) {
  let tempF = (9/5) * tempC + 32
  return tempF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
