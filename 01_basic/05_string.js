const name = "kundan"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log('Hello my name is ${name} ans my repo count is  $ {repoCount}');

const gameName = new String('kun-dan')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.substring(-5,3)
console.log(anotherString);

const newStringOne = "  kundan  "
console.log(newStringOne);
console.log(newStringOne.trim());