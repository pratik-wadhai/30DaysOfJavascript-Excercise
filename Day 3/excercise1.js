let challenge = "30 Days Of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(3, 7));
console.log(challenge.slice(3, 21));
console.log(challenge.includes("Script"));
console.log(challenge.split());
console.log(challenge.split(" "));
let challenge2 = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(challenge2.split(","));
console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("J"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
let challenge17 =
  "You cannot end a sentence with because because because is a conjunction";
console.log(challenge17.indexOf("because"));
console.log(challenge17.lastIndexOf("because"));
console.log(challenge17.search("because"));
let challenge20 = " 30 Days Of JavaScript ";
console.log(challenge20)
console.log(challenge20.trim(" "));
console.log(challenge20.startsWith(" "))
console.log(challenge20.endsWith("Script "))
console.log(challenge20.match("a"))
let challenge24 = "30 Days of ";
console.log(challenge24.concat("JavaScript"))
console.log(challenge.repeat(2))
