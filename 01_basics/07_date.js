let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

console.log(typeof(myDate));  //object

let createDate = new Date(2023, 0, 2)  // 0 is the first month
let anotherDate = new Date(2,12,2024) // something random - Thu Jul 16 1908
console.log(createDate.toDateString())
console.log(anotherDate.toDateString())


let newcreatedDate = new Date ("01-14-2025") 
let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(newcreatedDate.getTime());


myDate.toLocaleString('dafault',{
    weekday:"long"
})