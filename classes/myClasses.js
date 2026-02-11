//ES6

class user{
    constructor(username,email,password){
        this.username =username;
        this.email = email;
        this.password= password
    }

    encryptpassword(){
        return `${this.password}abc`

    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}
const see = new user ("shreya ","shreya@gmail.com","123")
console.log(see.encryptpassword()); //123abc
console.log(see.changeUserName()) //SHREYA

//behind the scene
function user (username,email,password){
    this.username= username;
    this.email = email;
    this.password = password;

}

user.prototype.encryptpassword=function(){
    reeturn `${this.password}abc`
}