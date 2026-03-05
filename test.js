/*const PI = 3.142;
const Pi = 3.142;
// const function = "albert"

const userName = "albert"*/

//check all object methods
//Object methods(Object.keys, Object.values, Object.entries, Object.assign, Object.freeze, Object.seal, Object.hasOwnProperty, Object.isFrozen, Object.isSealed, Object.getOwnPropertyDescriptor, Object.getOwnPropertyNames, Object.getOwnPropertySymbols, Object.preventExtensions, Object.isExtensible)

//1. Object.keys() - returns all property names(keys) of an object as an array
let student={
    name: "Nicole",
    age: 20,
    course: "Web Development"
};
console.log(Object.keys(student));

//2. Object.values() - returns all property values of an object as an array
console.log(Object.values(student));

//3. Object.entries() - returns an array of key-value pairs of an object
console.log(Object.entries(student));

//4. Object.assign() - copies properties from one object to another
let obj1 = { a:1};
let obj2 = { b:2};

let combined= Object.assign({}, obj1, obj2);
console.log(combined);

//5. Object.freeze() - prevents changes to an object (shallow)
let fruit={
    fruitName: "banana"
};
Object.freeze(fruit);
fruit.fruitName = "apple";
console.log(fruit);

//6.Object.seal() - prevents adding or deleting properties, but allows modifying existing ones
 let car={
    brand: "Porsche"
 };
 Object.seal(car);
  car.brand="Audi"; // allowed
  car.colour="Black"; // not allowed
  delete car.brand; // not allowed
  console.log(car);
 
  //7. Object.hasOwnProperty() - checks if an object has a specific property as its own (not inherited)
  console.log(student.hasOwnProperty("name")); // true

  //8. Object.isFrozen() - checks if an object is frozen
    console.log(Object.isFrozen(fruit)); // true
    console.log(Object.isFrozen(student)); // false

    //9. Object.isSealed() - checks if an object is sealed
    console.log(Object.isSealed(car)); // true
    console.log(Object.isSealed(fruit)); // false

    //10. Object.getOwnPropertyDescriptor() - returns details about a property of an object
    console.log(Object.getOwnPropertyDescriptor(student, "name"));

    //11. Object.getOwnPropertyNames() - returns all property names of an object, even non-enumerable ones
    console.log(Object.getOwnPropertyNames(student));

    //12. Object.getOwnPropertySymbols() - returns all symbol properties of an object
    let sym= Symbol("id");
    let obj={
        [sym]: 170216
    };
    console.log(Object.getOwnPropertySymbols(obj));

    //13. Object.preventExtensions() - prevents adding new properties to an object
    let book={
        title:"Purple Hibiscus"
    };
    Object.preventExtensions(book);
    book.author="Chimamanda"; // not allowed
    console.log(book);
    
    //14. Object.isExtensible() - checks if new properties can be added to an object
    console.log(Object.isExtensible(book)); // false
    console.log(Object.isExtensible(student)); // true

    //15. Object.create() - creates a new object with a specified prototype and properties
    let animal={
        speak(){
            console.log("Animal sounds");
        }
    };
    let chameleon= Object.create(animal);
    chameleon.speak(); // inherits speak method from animal

    //16. Object.fromEntries() - creates an object from an array of key-value pairs
    let entries= [["name", "Nicole"], ["age", 20]];
    let objFromEntries= Object.fromEntries(entries);
    console.log(objFromEntries);

    //17.Object.is() - compares two values for equality, similar to === but with special handling for NaN and -0
    console.log(Object.is(NaN, NaN)); // true
    console.log(Object.is(0, -0)); // false

    
