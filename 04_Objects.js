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

console.log(users[1].email);



