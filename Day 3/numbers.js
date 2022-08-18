// NUMBERS
let age = 20;
const gravity = 9.81;
let mass = 72;
// const PI = 3.14;

const boilingPoint = 100;
const bodyTemp = 37;

// MATH OBJECTS

const PI = Math.PI;
// console.log(PI); // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

// console.log(Math.round(PI)); // 3 to round values to the nearest number

// console.log(Math.round(9.81));

// console.log(Math.floor(PI)); // 3 rounding down

// console.log(Math.ceil(PI)); // 4 rounding up

// console.log(Math.min(-5, 3, 5, 3, 68, 1, 6));
// console.log(Math.max(-5, 3, 5, 3, 68, 1, 6));

const num = Math.floor(Math.random() * 11); // creates a random number between 0 and 10
// console.log(num);


// absolute value
// console.log(Math.abs(-10))

// square root
// console.log(Math.sqrt(100))
// console.log(Math.sqrt(2))

// power
// console.log(Math.pow(3,2))
// console.log(Math.E)

// logarithm
// console.log(Math.log(2))
// console.log(Math.log(10))

// returns the natural logarithm of 2 and 10 respectivily.
// console.log(Math.LN10)
// console.log(Math.LN2)

// trignomentry 

// console.log(Math.sin(0))
// console.log(Math.sin(60))

// console.log(Math.cos(0))
// console.log(Math.console(60))

// random number generator

let randomNum = Math.random() // generator 0 to 0.999
let numBtnZeroAndTen = randomNum * 11;

// console.log(numBtnZeroAndTen) // this gives min 0 to max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen);
console.log(randomNumRoundToFloor)     // this gives between 0 and 10

