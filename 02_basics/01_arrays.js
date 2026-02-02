const myArr = [1,2,3,4]
myArr.push(8)
console.log(myArr) 
myArr.pop()
console.log(myArr)

myArr.unshift(6) // adds 6 in front
console.log(myArr)
myArr.shift(console.log(myArr))   // removes the first element



const newArr = myArr.join()  // will convert the array into string
console.log(myArr);
console.log(newArr); // typeOf newArray is string


const Arr2 = [3,5,7,9,0]
const new1 = Arr2.slice(1,3)
console.log(Arr2) // no change in original array 

const new2 = Arr2.splice(1,3)
console.log(new2)   //retuens 5,7,9 as output which from index 1 to 3
