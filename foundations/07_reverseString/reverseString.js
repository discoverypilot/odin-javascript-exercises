const reverseString = function(string) {
  reverse = "";
  for (let i = string.length; i >= 0; i--) {
    reverse += string.charAt(i);
  }
  return reverse;
};

// Do not edit below this line
module.exports = reverseString;
