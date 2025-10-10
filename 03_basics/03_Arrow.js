const user = {
    username: "vivek",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);    // use `this` for curent contex.
        console.log(this);
        
    }

    
}
// user.welcomeMessage()
// user.username = "sam";
// user.welcomeMessage()
// console.log(this);                          // empty environment
                                            // this = windows in browser, // this = empty in node js
/*
function chai (){
    let username = "vivek"                  // use `this` in object not in function.
    console.log(this.username);
    
}
chai()
*/
// const chai = function (){
//     let username = "vivek"
//     console.log(this.username);
// }
// chai()

const chai =  () => {
    let username = "vivek"
    console.log(this);
}
// chai()

// const addTwo = (num1, num2) => {                       // explicit return 
//     return num1 + num2

// }

// const addTwo = (num1, num2) =>   num1 + num2

// const addTwo = (num1, num2) =>  ( num1 + num2 );         // implpicit return 

const addTwo = (num1, num2) =>  ( { username: "vivek"});

console.log(addTwo(3,4));

