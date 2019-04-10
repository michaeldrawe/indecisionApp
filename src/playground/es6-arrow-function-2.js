// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  return a + b;
};

console.log(add(55, 1));

// this keyword - no longer bound with arrow functions

const user = {
  name: "Michael",
  cities: ["Salt Lake", "Scheinfurt", "Kitzingen"],
  printPlacesLived() {
      return this.cities.map((city) => this.name + " has lived in " + city);

   
  }
};
console.log(user.printPlacesLived());


//Challenge area

const multiplier ={
 
  // numbers - array of numbers
  numbers: [10, 20, 30,],
   //multiplyBy - single number
   multiplyBy: 3,
  //multiply - return new array where the numbers have been multiplied
  multiply() {
    return this.numbers.map((number) => 
      this.multiplyBy * number);
  }
};

console.log(multiplier.multiply());