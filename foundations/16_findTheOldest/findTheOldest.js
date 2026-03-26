const findTheOldest = function(arr) {
  const yearCurrent = new Date(Date.now()).getFullYear();

  return arr.reduce((oldest, person) => {
    let oldestAge = getAge(oldest);
    let personAge = getAge(person);

    function getAge(a) {
      return (!a.yearOfDeath) ? yearCurrent - a.yearOfBirth : a.yearOfDeath - a.yearOfBirth;
    }

    return (oldestAge >= personAge) ? oldest : person;
  }, {});
};

// Do not edit below this line
module.exports = findTheOldest;
