const user ={
    name : "shreya",
    age: 19,
    email:"shreya@google.com",
    id:"123abc"
}
console.log(user.name)   //shreya
console.log(user["name"]) //shreya


const mysym = Symbol("key1")
const user2 ={
    "name" : "shreya",
    age: 19,
    email:"shreya@google.com",
    id:"123abc",
    [mysym]: "key1"
}
console.log(user2["name"]) //here we cant access using dot 
                           // shreya 
console.log(typeof(user2[mysym])) //string 

Object.freeze(user2) //no changes will be propagated after that