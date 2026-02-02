const fruits1 = ["apple","mango","guavava"]
const fruits2 = ["cherry","strawberry","kiwi"]
//fruits1.push(fruits2)
//console.log(fruits1)
//fruits1.concat(fruits2)
//console.log(fruits1)


const allFruits = fruits1.concat(fruits2)  
// will join the 2 arrays properly not like one array being part of other
console.log(allFruits);


//---spread----
const newFruits = [...fruits1, ...fruits2]
console.log(newFruits)   // will do the same thing


const rand_array = [1,2,[3,4,5],6,7,[8,9,[0]]]
console.log(rand_array.flat(Infinity)) // all elements in one array only

console.log(Array.from("Shreya"))  // gets converted into an array

let score1 =100;
let score2 =200;
let score3 =300;

console.log(Array.of(score1,score2,score3)) //forms an array of 100, 200 ,300