function repeatString(string, num) {
  output = "";

  if (num > 0) {
    for (let i = 1; i <= num; i++) {
      output += string;
    }
  }
  else {
    return "ERROR";
  }

  return output;
}

// Do not edit below this line
module.exports = repeatString;
