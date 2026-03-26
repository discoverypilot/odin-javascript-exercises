const palindromes = function (string) {
  const validChars = "abcdefghijklmnopqrstuvwxyz1234567890";
  
  let forwards = string.toLowerCase().split('').filter((a) => validChars.includes(a)).join('');
  let backwards = forwards.split('').reverse().join('');

  return (backwards == forwards);
};

// Do not edit below this line
module.exports = palindromes;
