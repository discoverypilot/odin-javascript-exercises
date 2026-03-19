const sumAll = function(n1, n2) {
  if (typeof n1 != 'number'
   || typeof n2 != 'number'
   || n1 < 0
   || n2 < 0
   || n1 % 1 != 0
   || n2 % 1 != 0) {
    return 'ERROR'
   }

  let count = 0;
  let min = (n1 <= n2) ? n1 : n2;
  let max = (n1 >= n2) ? n1 : n2;

  for (min; min <= max; min++) {
    count += min;
  }

  return count;
};

// Do not edit below this line
module.exports = sumAll;
