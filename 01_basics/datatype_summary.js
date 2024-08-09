
// Primitive Datatype

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 777777777771323982734977483n

// *********************************

// Reference (Non-Primitive Daatatype)

// Array, Object, Function

const heros = ["Shk=aktiman","naagraj", "doga"]

let myObj = {
    name: "goutam",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);