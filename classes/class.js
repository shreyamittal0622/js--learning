function setusername (username){
    this.username =username
}
function createUser (username, email, password){
    setusername.call(username)

    this.email = email;
    this.password = password;

}
const helo =  new createUser("shreya", "shreya@gmail.com", "2207")
console.log(helo)