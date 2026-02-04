var c=300
let a=500
const b=600
if(true){
    let a=10
    const b=20
    var c=30
    console.log(a) //10
}

//console.log(a)
//console.log(b)

// both of the above will show error and that should apparently happen because they are inside the function 
console.log(c) //30
 // only var will work outside also the function

 console.log(a) //500
 console.log(b)  //600



 //-----------------------------------
 console.log(addone(3))//4

 function addone(num){
    return num+1
 }

console.log(addtwo(3))//no otput but will show an error and hence further code wont work
 const addtwo = function (num){
    return num+2
 }
 console.log(addone(3))//4
 console.log(addtwo(3))//5