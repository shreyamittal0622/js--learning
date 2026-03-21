const email="hello@gmail.com"
let city="faridabad"
var password="1212"
let state;
/* prefer not to use var
because of block scope and functional scope
*/
city="dhanbad"
password="1234"
console.table([email,city,password,state])
