let peopleNames = require("../country/state/city/index");
let getFirstNames = require("../utilities/utils/index");

let getPeopleInCity = (peopleNames) => {
  return getFirstNames(peopleNames);
};

module.exports = getPeopleInCity;
