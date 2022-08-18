// strings method

// 1. length

let js = "javascript";
// console.log(js.length);
// console.log(firstName.length)

// 2. accessing characters in String

// let string = "javascript"
// let firstLetter = string[0];
// console.log(firstLetter)

// let lastIndex = string.length - 1;
// console.log(lastIndex)
// console.log(string[lastIndex])

// 3. toUpperCase()

// let string = 'JavaScript';
// console.log(string.toUpperCase())

// 4. toLowerCase()
// console.log(string.toLowerCase())
// let firstName = "Pratik"
// console.log(firstName.toLowerCase())

// 5. substr()

// let string = "javascript"
// console.log(string.substr(4,4))
// console.log(firstName.substr(3,4))

// 6. substring()
// console.log(string.substring(0,4))
// console.log(string.substring(4,10))
// console.log(string.substring(3))

// 7. split()

// let string = '30 days of javascript'

// console.log(string.split())
// console.log(string.split(' '))
// let firstName = "pratik"
// console.log(firstName.split())
// console.log(firstName.split(''))
// let countries = 'Finland, india,sweden,usa,france'
// console.log(countries.split(','))
// console.log(countries.split(', '))

// 8. trim()

// let string = '              30 days of javascript   '
// console.log(string)
// console.log(string.trim(' '))
// let name = " pratik "
// console.log(name)
// console.log(name.trim(' '))

// 9. includes()
// let string = '30 days of JavaScript';

// console.log(string.includes('days'))
// console.log(string.includes('Days'))

// 10. replace()
// console.log(string.replace("javascript", "python"))

// 11.charAt()
// console.log(string.charAt(9))
// let lastIndex = string.length - 1;
// console.log(string.charAt(lastIndex))
// console.log(string.length)

// 12. charCodeAt()
// console.log(string.charCodeAt(3))
// console.log(string.charCodeAt(lastIndex))

// 13. indexOf()
// console.log(string.indexOf('d'))
// console.log(string.indexOf('Script'))

// 14. lastIndexOf()

// let string = "I love JavaScript. If you do not love JavaScript what else can you love."
// console.log(string.lastIndexOf("love"))
// console.log(string.indexOf("JavaScript"))
// console.log(string.lastIndexOf("JavaScript"))

// 15. concat()
// let string = '30';
// console.log(string.concat("days", "of","javascript"));

// let country = 'fin'
// console.log(country.concat("land"))

// 16. startsWith()
// let string = "Love is nothing but attraction"
// console.log(string.startsWith("Love"))
// console.log(string.startsWith("Hate"))

// 17. endsWith()
// let string = "Love is the most powerful feeling in the world"
// console.log(string.endsWith("world"))

// 18. search()
// let string = "I love JavaScript. If you do not love JavaScript what else can you love."
// console.log(string.search('love'))
// console.log(string.search('/JavaScript/gi'))

// 19. match()
// let string = 'Love';
// let patternOne = /love/
// let patternTwo = /love/gi

let string =
  "I love JavaScript. If you do not love JavaScript what else can you love.";
console.log(string.match("love"));
// let pattern = /love/gi;
// console.log(string.match(pattern));

// 20. repeat()
// let string = "love";
// console.log(string.repeat(10))