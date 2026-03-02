/*Write a function that takes an array of numbers and returns the sum of all the numbers
function sumOfArray(numbers) {
    let sum=0;
    for (let i=0; i<numbers.length; i++){
        sum = sum + numbers[i];
    }
    return sum;
    }
    console.log(sumOfArray([1,2,3,4,5]));
    */

    /*Write a function that takes an array and returns the largest number in the array
    function largestNumberInArray(numbers) {
        let largest = numbers[0];
        for(let i=1; i<numbers.length; i++){
            if(numbers[i] > largest) largest = numbers[i];

        }
        return largest;
    }
    console.log(largestNumberInArray([1,2,3,4,5]));*/

    /*Write a function that counts how many even numbers are in an array
function countEvenNumbersInArray(numbers) {
    let count=0;
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] % 2 === 0) count = count + 1;
    }
    return count;
}
console.log(countEvenNumbersInArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]));*/

/*Write a function that returns the index of the first negative number in an array. If there are no negative numbers, return -1
function indexOfFirstNegativeNumber(numbers) {
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] < 0) return i;
    }
    return -1;
}
console.log(indexOfFirstNegativeNumber([1,2,3,4,5,6,7,8,9,10]));*/

/*Write a  function that takes an array and returns a new array with only the positive numbers
function filterPositiveNumbers(numbers) {
    let positiveNumbers = [];
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] > 0) positiveNumbers.push(numbers[i]);
    }
    return positiveNumbers;
}
console.log(filterPositiveNumbers([-1,2,-3,4,-5,6,-7,8,-9,10]));*/
/*Write a function that checks if a given number exists in an array
function checkIfNumberExistsInArray(numbers, target) {
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] === target) return true;
    }
    return false;
}
console.log(checkIfNumberExistsInArray([1,2,3,4,5], 3));
console.log(checkIfNumberExistsInArray([1,2,3,4,5], 6));*/
/*Write a function that takes an array and returns the smallest number in the array
function smallestNumberInArray(numbers) {
    let smallest = numbers[0];
    for(let i=1; i<numbers.length; i++){
        if(numbers[i] < smallest) smallest = numbers[i];
    }
    return smallest;
}   
console.log(smallestNumberInArray([1,2,3,4,5]));*/
/*Write a function that counts how many times a specific number appears in an array
function countOccurrencesOfNumberInArray(numbers, target) {
    let count = 0;
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] === target) count = count + 1;
    }
    return count;
}
console.log(countOccurrencesOfNumberInArray([1,2,3,4,5,3,3,3], 3));*/

/*Write a function that returns true if all numbers in an array are greater than 10, and false otherwise
function areAllNumbersGreaterThan10(numbers) {
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] <= 10) return false;
    }
    return true;
}
console.log(areAllNumbersGreaterThan10([11,12,13,14,15]));
console.log(areAllNumbersGreaterThan10([1,12,13,14,15]));*/
//Write a function that finds the sum of all odd numbers in an array
function sumOfOddNumbersInArray(numbers) {
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] % 2 !== 0) sum = sum + numbers[i];
    }
    return sum;
}
console.log(sumOfOddNumbersInArray([1,2,3,4,5,6,7,8,9,10]));