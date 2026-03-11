const repeatString = function(string, num) {
  let output = '';
  let i = 0;
  
  if (num >= 0) {
    while (i < num) {
      output += string;
      i++;
    }
    return output;
  }

  else {
    return 'ERROR';
  }
};

// Do not edit below this line
module.exports = repeatString;
