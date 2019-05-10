
class Person {
    constructor(name = "Anonymous", age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting() {
       //return  'Hi ' + this.name + '!';
       return `Hi. I am ${this.name}! I am ${this.age} year(s) old.`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

const me = new Person('Michael Drawe', 40);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());