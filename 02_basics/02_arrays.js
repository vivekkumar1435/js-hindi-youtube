const marvel_heros = ["thor","ironman", "spiderman"];
const Dc_heros = ["superman", "flash", "batman"];

// ======= push =========


 // marvel_heros.push(Dc_heros);  //  push => add hole  element as a new element.
// console.log(marvel_heros);

// console.log(marvel_heros[3][2]);



// ======== concat ========

const allHeros = marvel_heros.concat(Dc_heros);    // concat => add both element 
// console.log(allHeros);



// ======== spread ========

const all_new_heros = [...marvel_heros, ...Dc_heros];    // ... => spread use to spread and seprate all element.
// console.log(all_new_heros);

//========== flat =========

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

console.log(Array.isArray("vivek")); // find array or not 
console.log(Array.from("vivek"));    // convert into array
console.log(Array.from({name: "vivek"}));  // (name:) => keys, ("vivek") => value    intresting

const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1, score2, score3));

