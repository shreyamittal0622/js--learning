

const id =Symbol('1234')
const anotherid=Symbol('1234')
console.log(id === anotherid)// false
// although both are same but are not same because of symbol datatype

const outsideTemp = null
console.log(typeof(outsideTemp)) // object
const fruits=["apple",'mango',"banana"]
console.log(typeof(fruits)) // object 

const myfun = function(){
    console.log("hello world")
}
console.log(typeof(myfun)) //function object 
//reference(non-primitive)-
//Arrays,object,function


//primitive
//string,number,null,undefined,boolean



//-------memory--------
//stack(primitive) , heap(non-primitive)


let myname ="shreya"
let anotherName = myname
anotherName="cheshta"
console.log(myname) //shreya
console.log(anotherName)  // cheshta
  // original value is not changed 
  // gets stacked up one on another = myname-> anotherName->myname
  //in heap every change is made in original value only like-
  let userOne={
    email: "shreya@.com",
    upi: "user@ybl"
  }// anything can be accesse and changed and it refers to heap
  