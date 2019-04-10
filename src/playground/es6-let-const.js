var nameVar = "Michael";
var nameVar = "John";
console.log("nameVar: ", nameVar);

let nameLet = "Jack";
nameLet = "Julie";
console.log("nameLet: ", nameLet);

const nameConst = "Frank";
console.log("nameConst: ", nameConst);

//BLock scoping

var fullName = "Michael Drawe";
let firstName;

if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}

console.log(firstName);
