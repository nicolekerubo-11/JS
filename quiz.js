// 1. Write a function that takes an array of numbers and returns the sum of all the numbers
function sumOfArray(numbers) {
    let sum=0;
    for (let i=0; i<numbers.length; i++){
        sum = sum + numbers[i];
    }
    return sum;
    }
    console.log(sumOfArray([1,2,3,4,5]));
    

    // 2. Write a function that takes an array and returns the largest number in the array
    function largestNumberInArray(numbers) {
        let largest = numbers[0];
        for(let i=1; i<numbers.length; i++){
            if(numbers[i] > largest) largest = numbers[i];

        }
        return largest;
    }
    console.log(largestNumberInArray([1,2,3,4,5]));

    // 3. Write a function that counts how many even numbers are in an array
function countEvenNumbersInArray(numbers) {
    let count=0;
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] % 2 === 0) count = count + 1;
    }
    return count;
}
console.log(countEvenNumbersInArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]));

// 4. Write a function that returns the index of the first negative number in an array. If there are no negative numbers, return -1
function indexOfFirstNegativeNumber(numbers) {
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] < 0) return i;
    }
    return -1;
}
console.log(indexOfFirstNegativeNumber([1,2,3,4,5,6,7,8,9,10]));

// 5. Write a  function that takes an array and returns a new array with only the positive numbers
function filterPositiveNumbers(numbers) {
    let positiveNumbers = [];
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] >0){
            positiveNumbers[positiveNumbers.length] = numbers[i];
        }
    }
    return positiveNumbers;
}
console.log(filterPositiveNumbers([-1,2,-3,4,-5,6,-7,8,-9,10]));

// 6. Write a function that checks if a given number exists in an array
function checkIfNumberExistsInArray(numbers, target) {
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] === target) return true;
    }
    return false;
}
console.log(checkIfNumberExistsInArray([1,2,3,4,5], 3));
console.log(checkIfNumberExistsInArray([1,2,3,4,5], 6));

// 7. Write a function that takes an array and returns the smallest number in the array
function smallestNumberInArray(numbers) {
    let smallest = numbers[0];
    for(let i=1; i<numbers.length; i++){
        if(numbers[i] < smallest) smallest = numbers[i];
    }
    return smallest;
}   
console.log(smallestNumberInArray([1,2,3,4,5]));

// 8. Write a function that counts how many times a specific number appears in an array
function countOccurrencesOfNumberInArray(numbers, target) {
    let count = 0;
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] === target) count = count + 1;
    }
    return count;
}
console.log(countOccurrencesOfNumberInArray([1,2,3,4,5,3,3,3], 3));

// 9. Write a function that returns true if all numbers in an array are greater than 10, and false otherwise
function areAllNumbersGreaterThan10(numbers) {
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] <= 10) return false;
    }
    return true;
}
console.log(areAllNumbersGreaterThan10([11,12,13,14,15]));
console.log(areAllNumbersGreaterThan10([1,12,13,14,15]));

// 10. Write a function that finds the sum of all odd numbers in an array
function sumOfOddNumbersInArray(numbers) {
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] % 2 !== 0) sum = sum + numbers[i];
    }
    return sum;
}
console.log(sumOfOddNumbersInArray([1,2,3,4,5,6,7,8,9,10]));

// 11. Write a function that takes an array and returns an average of the numbers
function getAverageOfNumbersInArray(numbers) {
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        sum = sum + numbers[i];
    }
    return sum/numbers.length;
}
console.log("Average of numbers in array:", getAverageOfNumbersInArray([1,2,3,4,5]));

//12. Write a function that finds the difference between the largest and smallest numbers in an array
function differenceBetweenLargestAndSmallestNumbersInArray(numbers) {
    let largest = numbers[0];
    let smallest = numbers[0];
    for (let i=1; i<numbers.length; i++){
        if(numbers[i] > largest) largest = numbers[i];
        if(numbers[i] < smallest) smallest = numbers[i];
    }
    return largest - smallest;
}
console.log("Difference between largest and smallest numbers in array:", differenceBetweenLargestAndSmallestNumbersInArray([1,2,3,4,5]));

//13. Write a function that takes an array and returns a new array with all numbers multiplied by 2
function multiplyNumbersInArrayBy2(numbers) {
    let result = [];
    for(let i=0; i<numbers.length; i++){
        result[i] = numbers[i] * 2;
    }
    return result;
}
console.log("Multiplied array:", multiplyNumbersInArrayBy2([1,2,3,4,5]));

//14. Write a function that returns the last element of an array
function lastElementOfArray(numbers){
    return numbers[numbers.length -1];
}
console.log("Last element of array:", lastElementOfArray([1,2,3,4,5]));

//15. Write a function that takes an array and a number, and returns true if the number is found at an even index
function checkIfNumberExistsAtEvenIndex(numbers, target) { //used "jump" method
    for(let i=0; i<numbers.length; i+=2){
        if(numbers[i]===target) return true;
    }
    return false;
}
console.log("Does number exist at even index?", checkIfNumberExistsAtEvenIndex([1,2,3,4,5,6,7,8,9,10], 10));

// 16.Write a function that counts how many numbers in an array are greater than a given value.
function countNumbersGreaterThanValue(numbers, value) {
    let count = 0;
    for(let i=0; i<numbers.length; i++){
        if(numbers[i]> value)
            count++;
    }
    return count;
}
console.log("Count of numbers greater than value:", countNumbersGreaterThanValue([1,2,3,4,5,6,7,8,9,10], 5));

//17.Write a function that returns the sum of numbers at even indexes in an array
function sumOfNumbersAtEvenIndexes(numbers) {
    let sum = 0;
    for(let i=0; i<numbers.length; i+=2){
        sum = sum + numbers[i];
    }
    return sum;
}
console.log("Sum of numbers at even indexes:", sumOfNumbersAtEvenIndexes([1,2,3,4,5,6,7,8,9,10]));

// 18. Write a function that takes an array and returns true if the array is sorted in ascending order
function isArraySortedInAscendingOrder(numbers) {
    for(let i=0; i<numbers.length -1; i++){
        if(numbers[i] > numbers[i+1]) return false;
    }
    return true;
}
console.log("Is array sorted in ascending order?", isArraySortedInAscendingOrder([1,2,3,4,5]));

// 19. Write a function that takes an array and returns the second largest number.
function secondLargestNumberInArray(numbers) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] > largest){
            secondLargest = largest;
            largest = numbers[i];
        }
        else if(numbers[i] > secondLargest && numbers[i] !== largest){
            secondLargest = numbers[i];
        }
    }
    return secondLargest;
}
console.log("Second largest number in array:", secondLargestNumberInArray([1,2,3,4,5]));

// 20.Write a function that takes an array and returns the number of elements that are both positive and even.
function countPositiveEvenNumbersInArray(numbers) {
    let count = 0;
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] > 0 && numbers[i] % 2 === 0) count++;
    }
    return count;
}
console.log("Count of positive even numbers in array:", countPositiveEvenNumbersInArray([1,2,3,4,5,6,7,8,9,10]));

//21.Write a function that counts how many times a specific character appears in a string
function countChar(str, targetChar) {
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(str[i]=== targetChar) count++;
    }
    return count;
}
console.log("Count of character in string:", countChar("minnesota", "l"));

//22. Write a function that returns the number of vowels in a string
function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";
    for(let i=0; i<str.length;i++){
        if(vowels.includes(str[i])) count++;        
    }
    return count;
}
console.log("Count of vowels in string:", countVowels("minnesotA"));

// 23. Write a function that takes reverse a string and returns the reversed string
function reverseString(str) {
    let reversed = "";  
    for(let i=str.length -1; i>=0; i--){
        reversed = reversed + str[i];
    }   
    return reversed;
}
console.log("Reversed string:", reverseString("KENYA"));

// 24.Write a function that checks if a string is a palindrome (reads the same forwards and backwards).
function isPalindrome(str) {
    let left = 0;
    let right = str.length -1;
    while(left < right){
        if(str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}
console.log("Is string a palindrome?", isPalindrome("madam"));
console.log("Is string a palindrome?", isPalindrome("hello"));

//25.Write a function that counts the number of words in a string, assuming words are separated by a single space
function countWords(str) {
    if(str.length === 0) return 0;
    let wordCount = 1; 
    for(let i=0; i<str.length; i++){
        if(str[i] === " ") wordCount++;
    }   
    return wordCount;
}
console.log("Count of words in string:", countWords("Hello world this is a test"));

//26. Create an array with 20 numbers and filter out the prime numbers from the array and print the prime numbers in the console
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true; 
}
console.log("Prime numbers in the array:", numbers.filter(isPrime));