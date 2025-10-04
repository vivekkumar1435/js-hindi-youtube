
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
