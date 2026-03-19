const removeFromArray = function(arr, ...toRemove) {
  return arr.filter(noMatches);

  function noMatches(element) {
    for (param of toRemove) {
      if (param === element) {
        return false;
      }
    }
    return true;
  }
};

// Do not edit below this line
module.exports = removeFromArray;
