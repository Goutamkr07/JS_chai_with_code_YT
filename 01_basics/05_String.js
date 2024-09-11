const name = "Goutam "
const middlename = "Kumar "
const lastname = "Sharma " 

// console.log(name + middlename + "value"); // outdated

console.log(`My name is ${name}, middle name is ${middlename}, last name is ${lastname}`);
console.log(typeof name);
console.log(typeof middlename);
console.log(typeof lastname);

// String variable as object 
const newName = new String('gout-am')
console.log(newName);
console.log(typeof newName);

// console.log(newName[0]); //acessing value by index in string object
// console.log(newName.__proto__); // using .__proto__

// methods for sting
// console.log(newName.toLocaleUpperCase()); //direct use of methods 
// console.log(newName.charAt(2)); //find the character by index
// console.log(newName.indexof('t')); //to find the index of 

const newstring = newName.substring(0,3)
console.log(newstring);

const anotherstring = newName.slice(0, 4)
console.log(anotherstring);

const string03 = newName.slice(-8,4)
console.log(string03);

//mdn website
const newStringOne = "     goutam     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary" //%20 mans space
console.log(url);

console.log(url.replace('%20','-'));

//.include('goutam')
console.log(url.includes('goutam'));


console.log(newName.split('-'));

