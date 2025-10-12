const userEmail = "h@hitesh.ai"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("don't have user email");
}

/*
Falsy values
False,  0,  -0,   BigInt 0n,   "",   null,   undefined,   NaN.


truthy values
"0",  'false',  " ",  [],  {},  function(){}

*/

// ============ checking =============

const usermail = []
if (usermail.length === 0){
    console.log( " array is empty")
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty")
}

// Nullish Coalescing Operator (??):  ` null, undefine `

let val1;
// val1 = 5 ?? 10
 val1 = null ?? undefined ?? 18
// val1 = null ?? 9 ?? 18

console.log(val1)

// Terniary Operator

// condition ? true : false
 const iceTeaPrice = 100
 iceTeaPrice <= 80 ? console.log("less than 80") : console.log ( "more than 80 ")