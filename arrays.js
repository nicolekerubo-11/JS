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
 let fruits = ["apple", "banana", "orange", "grape", "mango"];
 console.log(fruits.slice(1,4));// returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
 console.log(fruits.splice(2,1,"kiwi")); //changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It modifies the original array and returns an array containing the deleted elements.
console.log(fruits.concat(["pineapple", "watermelon"])); // is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.