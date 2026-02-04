const user ={
    name:"shreya",
    id:"123abc",
    message: function(){
        console.log(`${this.name}, welcome to the world`)
        console.log(this)   // prints the content 
    }
    
}

user.message()  // shreya,welcome to the world
user.name="sam"
user.message() // sam,welcome to the world



const addTwo = (num1,num2)=>{
    return num1+num2
}
console.log(addTwo(3,4))  //7

const add =(num1,num2)=>(num1+num2) 
console.log(add(4,5)) //9

const add2 =(num1,num2)=> {return num1+num2} //same thing as above