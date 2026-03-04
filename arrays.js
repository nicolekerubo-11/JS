/*let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers[1]);
numbers.push(11);// adds an element to the end of an array
console.log(numbers);
numbers.pop();// removes the last element in an array
console.log(numbers);
numbers.unshift(0);// adds an element to the beginning of an array
console.log(numbers);
numbers.shift();// removes the first element in an array
console.log(numbers);
numbers.includes(5);// checks if an array contains a specific element and returns true or 
console.log(numbers.includes(5));
numbers.indexOf(15);// returns the index of the first occurrence of a specific element in an array
console.log(numbers.indexOf(15));*/

//check what below array methods do and how to use them
//check the sort methods, search methods, iteration methods, mutator methods, array reference methods, accessor methods, and more
// slice() , splice() , concat() , join() , reverse() , sort() , map() , filter() , reduce(), forEach() 
/* let fruits = ["apple", "banana", "orange", "grape", "mango"];
 console.log(fruits.slice(1,4));// returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
 console.log(fruits.splice(2,1,"kiwi")); //changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It modifies the original array and returns an array containing the deleted elements.
console.log(fruits.concat(["pineapple", "watermelon"])); // is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
console.log(fruits.join(" - ")); // joins all elements of an array into a string and returns this string. The separator is specified as an argument, and if not provided, it defaults to a comma.
console.log(fruits.reverse()); // reverses the order of the elements in an array in place. The first array element becomes the last, and the last array element becomes the first. It modifies the original array and returns a reference to the same array.
console.log(fruits.sort()); // sorts the elements of an array in place and returns the sorted array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
console.log(fruits.map(fruit => fruit.toUpperCase())); // creates a new array populated with the results of calling a provided function on every element in the calling array. It does not modify the original array.
console.log(fruits.filter(fruit => fruit.length > 5)); // creates a new array with all elements that pass the test implemented by the provided function. It does not modify the original array.
console.log(fruits.reduce((accumulator, currentValue) => accumulator + " " + currentValue)); // executes a reducer function (that you provide) on each element of the array, resulting in a single output value. It does not modify the original array.
fruits.forEach(fruit => console.log(fruit)); // executes a provided function once for each array element. It does not modify the original array and does not return a new array.*/

const numbersSearch = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("indexOf 5:", numbersSearch.indexOf(5)); 
console.log("indexOf 3 from index 1:", numbersSearch.indexOf(3, 1)); 

//create an array with 20 numbers and filter out the prime numbers from the array and print the prime numbers in the console
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true; 
}
console.log("Prime numbers in the array:", numbers.filter(isPrime));
/*sorting objects*/
let students = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 21 }
]
