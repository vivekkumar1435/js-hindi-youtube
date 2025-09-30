//=========== singleton ===========

// const tinderUser = new Object();
const tinderUser = {};

tinderUser.Id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false 

// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"vivek",
            lastname:"kumar"
        }
    }
}
// console.log(regularUser.fullname);

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};
const obj3 = {5:"e", 6:"f"};
// const obj4 = Object.assign({},obj1,obj2,obj3);  //use Object.assign to combine all object in one seperatly.

const obj4 = {...obj1,...obj2,...obj3};  // use ... (spread) to spread element of object.

// console.log(obj4);

const users = [
    {
        id:"1",
        email:"vivek@gmail.com"
    },
    {
        id:"2",
        email:"kumar@gmail.com"
    },
    {
        id:"3",
        email:"rani@gmail.com"
    }
]

// console.log(users[1].email);

console.log(tinderUser);                        //              { Id: '123abc', name: 'sammy', isLoggedIn: false }
console.log(Object.keys(tinderUser));           // use keys     [ 'Id', 'name', 'isLoggedIn' ]
console.log(Object.keys(tinderUser).length);    // use .length  3
console.log(Object.values(tinderUser));         // use values   [ '123abc', 'sammy', false ]
console.log(Object.entries(tinderUser));        // use entries  [ [ 'Id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty("isLoggedIn"));   // use hasOwnProperty to find object is exist or not.

//=================== Destructure ==================

const course = {
    coursename: "js in hindi",
    price:     "999",
    courseInstructor: "Hitesh"

};

// course.coourseInstructor

const {courseInstructor: inst} = course
console.log(inst);

// ========= API ==========

// {
//     "name": "vivek",
//     "gender":"male",
//     "age": 19

// }
 
// [
//     {},
//     {},
//     {},
// ]