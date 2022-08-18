console.log("strings");

let space = " ";
let firstName = "pratik";
let lastName = "wadhai";
let city = "nagpur";
let language = "javaScript";
let job = "frontEndDeveloper";
let quote = "Hello World";
let age = 250;

let fullName = firstName + space + lastName;
// console.log(fullName);

let personInfoOne = fullName + " I am " + age + ". I live in " + city;
// console.log(personInfoOne);

const paragraph =
  "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too.";

// console.log(paragraph);

// console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?')
// console.log('Days\tTopics\tExercises')
// console.log('Day 1\t3\t5')
// console.log('This is a backslash  symbol (\\)') // To write a backslash
// console.log('In every programming language it starts with \"Hello, World!\"')
// console.log("In every programming language it starts with \'Hello, World!\'")
// console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

// template literals

let a = 3;
let b = 4;
// console.log(`the sum of ${a} and ${b} is ${a + b}`)

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${city}`;
let personInfoThree = `I am ${fullName}. I am ${age}. I live in ${city}. I am a ${job}. I love ${language}`;
// console.log(personInfoTwo)
// console.log(personInfoThree)

// console.log(`${a} is greater than ${b}: ${a > b}`)


