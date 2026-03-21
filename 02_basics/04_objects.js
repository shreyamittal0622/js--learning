

const obj1 ={ 1:"a", 2:"b"}
const obj2 ={ 3:"a", 4:"b"}
const obj3 ={ 5:"a", 6:"b"}

const obj =Object.assign({}, obj1, obj2, obj3)
console.log(obj);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj_another ={...obj1, ...obj2}
console.log(obj_another) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

console.log(Object.keys(obj))
//we can even access values and entries in same way 


const regularUser ={
  email: "shreya@gmail.com",
  fullname:{
    userfullname: {
      firstname:"shreya",
      lastname:"mittal"
    }
  }
  
}

console.log(reularUser.fullname.userfullname.firstname);
