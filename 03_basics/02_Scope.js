
var c = 300                            // Global scope 
let a = 300
if (true){
    let a = 10  
    const b = 20                       // Block Scope
    //  console.log("inner", a);
     
}
//  console.log(a);
// console.log(b);
//  console.log(c);



function one (){
    const username = "vivek"
    function two (){
        const website = "youtube"
        // console.log(username);
        
    }
    // console.log(website);
    two()
}
one()

if(true){
    const username = "vivek"
    if (username==="vivek"){
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);

// ++++++++++++++++++++++++ interesting +++++++++++++++++++++++++

console.log(addone(5));               // Access before initialization.

function addone (num){
     return num + 1
}


console.log(addtwo(7));               // Can not Access before initialization  Because value hold on  variable.

const addtwo = function (num){
       return num + 2
}
