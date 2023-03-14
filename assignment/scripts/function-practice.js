console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return (`Hello, ${name}!`);
}
// Remember to call the function to test
console.log(helloName ("Anders"));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}

console.log(addNumbers(1, 2));


// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ){
  //hopefully this is the correct operation that they are requesting.
  return (num1 * num2 * num3);
}

console.log(multiplyThree( 1, 2, 3));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  //check if given number is greater than zero with if statement
  if ( number > 0 ){
    return true;
  }
  else {
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  return array[array.length - 1];
}

let arr = [1, 2, 3, 4, 5, 6];

console.log(`Using getLast on array; should be 6: ${getLast(arr)}`);

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  //loop through array
  for (let i = 0; i < array.length; i++){
    //check [i] against value
    if (value == array[i]){
      //if ===, then return true
      return true;
    }
  }
  //if entire array is looped through without confirming [i] === value, return false
  return false;
}

console.log(`Using find function to test for loop, should return true: ${find(4, arr)}` );


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  //use split() to turn string into array
  let stringArray = string.split("")

  //check ...[0] against letter
  if (stringArray[0] == letter) {
    return true;
  }
  else {
    return false;
  }

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( array ) {
  let sum = 0;
  // TODO: loop through given array
  for (let i = 0; i < array.length; i ++) {
    //add each element in given array to new total sum
    sum += array[i];
  }
  return sum;
}

console.log("Using sumAll to sum up array, should be 28: ", sumAll([1, 2, 3, 4, 5, 6, 7]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function returnPositive (array) {
  //initialize new array to be returned
  let newArray = [];

  //loop through given array
  for (let i = 0; i <= array.length; i++){
    //use boolean to check for positive elements in array
    if (array[i] > 0) {
      //if positive int, .push to newArray
      newArray.push(array[i])
    }
    // necessary to remove <= 0 integers?
    // else if (array[i] <= 0) {

    // }
  }
  //return newArray
  return newArray;
}

console.log("Checking returnPositive: ", returnPositive([1, 2, 3]));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
