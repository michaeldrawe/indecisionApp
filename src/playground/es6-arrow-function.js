/* function square(x) {
  return x * x;
}

console.log(square(8));

const squareArrow = (x) => {
  return x * x;
};

console.log(squareArrow(55));
 */

// Challenge - User arrow functions
//getFIrstName('Mike Smith) -> "MIke"

//Create regular arrow function
//Create arrow function using shorthand syntax

const getFirstName = fullName => {
  return fullName.split(" ")[1];
};

console.log(getFirstName("Mike Smith"));

const getFirstName2 = fullName => {
  return fullName.split(" ")[1];
};

console.log(getFirstName2("Michael Drawe"));
