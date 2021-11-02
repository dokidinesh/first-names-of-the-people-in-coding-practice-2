const namesList = require("../country/state/city/index");

const getfirstNames = require("../utilities/utils/index");

function getPeopleInCity(namesList) {
  return getfirstNames(namesList);
}

module.exports = getPeopleInCity;
