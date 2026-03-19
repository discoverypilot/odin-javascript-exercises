const convertToCelsius = function(tempF) {
  let tempC = (tempF - 32) * (5/9);
  tempC = round(tempC);
  return tempC;
};

const convertToFahrenheit = function(tempC) {
  let tempF = (9/5) * tempC + 32
  tempF = round(tempF);
  return tempF;
};

const round = (x) => Math.round(x * 10) / 10

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
