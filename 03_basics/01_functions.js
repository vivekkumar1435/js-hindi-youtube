
function sayMyName (){
 console.log("v");
console.log("i");
console.log("v");
console.log("e");
console.log("k");
}

// sayMyName()

function addTwoNumbers(number1, number2){       //(number1, number2) parameter
         let result = (number1 + number2)
        //   console.log("vivek")
         return result
         
}

 const result = addTwoNumbers(3,4)                              // (3,4) arguments
//  console.log("return:", result);
 


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter username");
        return                                     // no code exicute in function after `return`
        
    }
    return `${username} just Logged In`
}
console.log(loginUserMessage("vivek"));

function calculateCartPrice (val1,val2,...num1){           // use `...` rest operator for packing elements .
   return [val1,val2,num1]
};
console.log(calculateCartPrice(200,300,400,30,2000,199)); 

let user = {
    username:"vivek",
    price : 199
};

function handleObject(anyObject){
     return `username is ${anyObject.username} and the price is ${anyObject.price}`
}
console.log(handleObject(user));

const myNewArray = [100,200,300];

function arrayreturn (anyarray){
    return anyarray[1]
}

// console.log(arrayreturn(myNewArray));
console.log(arrayreturn([1,3,5,7]));

