
let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());
// console.log(myDate.toLocaleTimeString());

// let myCreatedDate = new Date(2025,01,23);
 let myCreatedDate = new Date(("01-05-2023"));
// console.log(myCreatedDate.toString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp.toString());
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

// StringInterPolation

console.log(`${newDate.getDay()}and the time is ${newDate.getTime()}`);

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    timeStyle:"medium"
    
}));




