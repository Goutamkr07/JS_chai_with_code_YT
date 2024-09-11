
// Primitive Datatype

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

//number
const score = 100
const scoreValue = 100.3

//boolean
const isLoggedIn = false

//null
const outsideTemp = null

//undefined
let userEmail;

//symbol
const id = Symbol('123')
const anotherId = Symbol('123')
//compare
console.log(id === anotherId);

//bigint
const bigNumber = 7777777713239827349774836667n

// *********************************

// Reference (Non-Primitive Daatatype)

// Array, Object, Function

//array
const heros = ["Shk=aktiman","naagraj", "doga"]

//object
let myObj = {
    name: "goutam",
    age: 22,
}

//function
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber); // to find the datatype


//*********************************************************

// Stack(Primitive), Heap (non-primitive) 


// stack 
let myYoutubename = "channel_name"

let anothername = myYoutubename
anothername = "goutam"

console.log(myYoutubename);
console.log(anothername);

// ****************************
// heap

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "goutam@google.com"

console.log(userOne.email);
console.log(userTwo.email);
