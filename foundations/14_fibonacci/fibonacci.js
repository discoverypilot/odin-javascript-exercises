const fibonacci = function(x) {
  if (x < 0) {
    return "OOPS";
  }
  
  let results = [0, 1];
  for (i = 1; i < x; i++) {
    results.push(results[i] + results[i-1]);
  }
  return results[x];
};

// Do not edit below this line
module.exports = fibonacci;
