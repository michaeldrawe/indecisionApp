"use strict";

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
  return a + b;
};

console.log(add(55, 1));

// this keyword - no longer bound with arrow functions

var user = {
  name: "Michael",
  cities: ["Salt Lake", "Scheinfurt", "Kitzingen"],
  printPlacesLived: function printPlacesLived() {
    console.log(this.name);
    console.log(this.cities);
  }
};
user.printPlacesLived();
