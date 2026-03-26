const getTheTitles = function(arr) {
  return arr.reduce((titles, book) =>
    [...titles, book.title], []);
};

// Do not edit below this line
module.exports = getTheTitles;
