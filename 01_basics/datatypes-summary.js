

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