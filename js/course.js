// Age Print
// var age = prompt('What is your age?');

// document.getElementById('someText').innerHTML = age;
// Age End

// Function Introduction to greetings
function greeting(yourName){
    var result = 'Hello ' + yourName;
    console.log(result);
    // document.write(result);
}

// var name = prompt('What is your name?');
// greeting(name);

// Function End


// Function Arguments
// How to add two number together?

function sumNumbers(num1, num2){
    var result = num1 + num2;
    console.log(num1 + num2);
}

// sumNumbers(10, 10);

// Data types
let yourAge = 10;                           // number
let yourName = 'Bob';                       // string
let name = {first: 'Jane', last: 'Doe'};    // object
let truth = false;                          // boolean
let groceries = ['apple', 'banana', 'oranges']; // array
let random;                                 // undefined
let nothing = null;                         // value null

// String in Javascript (common methods)
let fruit = 'banana,apple,orange,blackberry';
let moreFruit = 'banana\apple';             // new line

console.log(fruit.length);
console.log(fruit.indexOf('na'));
console.log(fruit.slice(2, 5));
console.log(fruit.replace('ban', 'tab'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(3));
console.log(fruit[2]);
console.log(fruit.split(','));              // split by a comma
console.log(fruit.split(''));              // split by characters


// Array
let fruits = ['banana', 'apple', 'pineapples'];
fruits = new Array ('banana', 'apple', 'pineapples');

// alert(fruits[2]);                          // access value at index 2nd

fruits[0] = 'pear';
console.log(fruits);

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// array common methods
console.log('to string: ', fruits.toString());
console.log(fruits.join(' * '));                // removes last item
console.log(fruits.push('pawpaw'), fruits);     //appends
console.log(fruits[0]);
fruits[fruits.length] = 'new fruits';
console.log(fruits);
fruits.shift();                                 // remove first element from a list
console.log(fruits);
fruits.unshift('kiwi');                         // add first element to an array
console.log(fruits);

let vegetables = ['asparagus', 'tomato', 'brocoli'];
let allGroceries = fruits.concat(vegetables);   // combine arrays
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers = [5, 10, 12, 23, 4, 45, 89, 43, 21];
console.log(someNumbers.sort(function(a, b) {return a-b})); // sorted in ascending order
console.log(someNumbers.sort(function(a, b) {return b-a})); // sorted in descending order

let emptyArray = new Array();
for (let num = 0; num < 10; num++){
    emptyArray.push(num);
}
console.log(emptyArray);