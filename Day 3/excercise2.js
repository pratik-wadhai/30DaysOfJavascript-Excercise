console.log(
  "There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);

// let num = "10";
// let num2 = +num;
// console.log(typeof num2);

let parseFloat = "9.8";
let parseFloat2 = +Math.round(parseFloat);
console.log(typeof parseFloat2);

let pyGon = "python jargon";
console.log(pyGon.includes("on"));

let sentence = "I hope this course is not full of jargon";
console.log(sentence.includes("jargon"));

let random100 = Math.round(Math.random() * 101);
console.log(random100);
let random50100 = Math.round(Math.random() * (101 - 50 + 1) + 50);
console.log(random50100);

let random255 = Math.round(Math.random() * 256);
console.log(random255);

let string = "JavaScript";
let stringLength = string.length;
console.log(string.charAt(Math.round(Math.random() * stringLength)));
let num = "1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125";
console.log(num);

let substr = "ou cannot end a sentence with because because because is a conjunction";
console.log(substr.substr(30,24))
// console.log(substr.lastIndexOf("because"))