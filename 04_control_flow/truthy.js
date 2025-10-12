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