//   Primitive

// 7 types : String, Number, Boolean, Null, Undefine, Symbol, BigInt

let score = 100
let ScoreValue = 100.8

let isLoggedIn = false
const outsideTemp = null 
let userEmail;

const Id = Symbol('123');
const anotherId = Symbol('123');
console.log(Id === anotherId);

const bigNumber = 1234567545646464146454654635456n   // use  n after number to represent as bigint
console.log(typeof bigNumber);



// Refrance (Non Primitive)

// Array, Objects, Functions

const Heros = ["saktiman", "naagraj", "doga"];   // use [] to represent Arrays

 let myInfo = {
    name: "vivek",    
    age :  19,
};                           //  use {} to represent Objects 

const myFunction = function (){console.log("helo world");
}

console.log(typeof myFunction);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory Types

// stack  (primitive)
// heap   (non-primitive)

// stack example
let youtubename = "distoo";
let anothername = youtubename;
 anothername = "vivek";
console.log(anothername);
console.log(youtubename);

// heap example

let userOne ={
    Email: "vivek@google.com",
    upi: "pay@ybl"
};
let userTwo = userOne
userTwo.Email = "google@gmail.com"
console.log(userOne.Email);
console.log(userTwo.Email);














