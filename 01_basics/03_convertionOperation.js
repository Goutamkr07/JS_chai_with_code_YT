let score = "33" //output => 33
// let score = "33abc" //output => NaN (Not a Number)
// let score = true //output => 1
// let score = false //output => 0

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

let isLoggedIn = 1;

// let isLoggedIn = 0;
// let isLoggedIn = "";
// let isLoggedIn = "goutam";


let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

/*      output

// 1 => true; 0 => false
// "" => false
//  "goutam" => true
*/


// string convertion
let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber);