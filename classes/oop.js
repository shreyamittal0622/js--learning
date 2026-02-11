const user ={
    username:'shreya',
    id:'123abc',

    getuserdetails: function(){
        
        console.log(`${this.username}`)
    }
}
//console.log(user.username)
console.log(user.getuserdetails())
// new is a constructor function