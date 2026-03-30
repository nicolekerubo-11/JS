// A variable is a container used to store data in memory
// in javascript , varaibles are created using let, const or var
// var is the old way of creating variables
// let allows creating varaibles whose values(the data) can change
// const is for storing data that does not change in the lifetime of an application on memory/ram

/*let score = 9000;
const interestRate = 15;

var username = "kevin";

score = 800;

console.log(score * 8000);

// interestRate = 10;*/

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
    let user1 = new User("Nicole",20);
    let user2 = new User("Amali",21);

 console.log(user1);
 console.log(user2);

 class Calculator {
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        return a / b;
    }
    modulus(a, b) {a%b}
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
}
let calc= new Calculator();

console.log(calc.multiply(10, 20));
console.log(calc.divide(20, 10));
console.log(calc.modulus(13, 2));
console.log(calc.add(20, 10));
console.log(calc.subtract(1, 10));
