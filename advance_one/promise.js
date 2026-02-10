const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task is completed')
        resolve()

    },1000)
})
promiseOne.then(function(){
    console.log('promise consumed')
})

const promisetwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('task done ')
        resolve()
    },1000)
}).then(function(){
    console.log('async 2 resolved')
})


//3.
const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({ username :"shreya", id:"123abc"})

    },1000)
})

promisethree.then(function(user){
    console.log(user)
})
//4.
const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!true){
            resolve({username:"shreya", id:"123456"})
        }
        else{
            reject("something went wrong")
        }

    },1000)
})
promisefour.then((user)=>{
    console.log(user);
    return user.username;

}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error)

}).finally(()=> console.log('finish')) // will show => spmething went wrong
//console.log(username) --- wont work 

//5.
const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!true){
            resolve({username:"shreya", id:"123456"})
        }
        else{
            reject("something went wrong")
        }

    },1000)
})
async function promisefiveResolve(){
    try {
        const response = await promisefive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}
promisefiveResolve()