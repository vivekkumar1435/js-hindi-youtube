 const score = 400;

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(2)); // use toFix for fixing position of number 10/100/1000

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(5)); // use toPrecision for round of the number

const hundreds = 1000000;
console.log(hundreds . toLocaleString('en-IN')); // use toLocaleString('en-IN') for changing format 

//========================== MATHS=========================

console.log(Math);
console.log(Math.abs(-4));     // use .abs for positive value
console.log(Math.round(4.5));  // use .round for roundof value (before decimal)
console.log(Math.ceil(4.2));   // use .ceil for max
console.log(Math.floor(4.9));  // use .floor for min
console.log(Math.sqrt(144));   // use .sqrt for root value

console.log(Math.random()); // Math.random => always give value between 0-1 .
console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max - min + 1 ))+min);
