// constructor, literals
//  Object.create()  // singleton


// objects literals
const mySym = Symbol("key1");

const jsuser = {
    name: "vivek",
    [mySym]: "mySym1",          // use  [] to refer symbol as a key in object.
    age : 18,
    location: "sonbhadra",
    email : "vivek@google.com",
    isLoggedIn: false,
    lastLogginDays: ["Monday", "Tuesday"],
}
// console.log(typeof jsuser[mySym]);

jsuser.email = "vivek@youtube.com";

// Object.freeze(jsuser);                   // use Object.freeze to  freez the object 'no changes possible'.
jsuser.email = "vivek@microsoft.com"
// console.log(jsuser);

jsuser.greeting = function(){
    console.log("Hello JS user");
}
jsuser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}


console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());
