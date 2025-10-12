// if 

const temperature = 41

if (temperature === 55){
    console.log(`less than 50`);
 
} else {
    console.log(`temperature is more than 50`);
    
}

//  <, >, <=, >=, ==, ===, !=, !==

const score = 200
if ( score >100) { 
   const power="fly"
    console.log(`user power: ${power}`);
    
}
else {
    console.log(`you can not able to fly`);
    
}
 

// const balance = 10000
//   if ( balance > 500 )  console.log("test"), console.log("test2");      => not to do implisit scope



// ======================== checking multiple conditions ===================

const balance = 1000

if (balance < 500) {
      console.log("less than 500");
      
} else if (balance < 750) {
    console.log("less than 750");
    
}else if (balance < 900) {
    console.log("less than 900");
}else{
    console.log("less than 1200");
    
} 

//       uses of && ( and )

const userLoggedIn = true 
const debitCard = true 

if (userLoggedIn && debitCard & 2 == 2)
{
    console.log( "allow to buy course")
};

//    uses of || (or)

const loggedInFromGoogle =  false
const loggedInfromEmail = true
if (loggedInFromGoogle || loggedInfromEmail){
    console.log("user logged in")
}