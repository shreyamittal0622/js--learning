function price(...num1){
    return num1
}

const a = price(100,200,300) 
console.log(a) //[100,200,300]
// if price(num)=> output will be 100

const user={
    name: "shreya",
    id:"123abc"
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.name} and id is ${anyobject.id}`)
}

handleobject(user)