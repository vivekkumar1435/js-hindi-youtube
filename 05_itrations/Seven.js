// ============ map =========== 

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumber = myNumber.map((num) => num + 10 )

// ========= multiple  methods ============

const myLove = myNumber.map((num) => `vivek loves ${num * 10 } times `).map((num) => num + "rani").filter((num) => num == `vivek loves 100 times rani`)
console.log(myLove);
