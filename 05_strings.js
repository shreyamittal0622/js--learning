const gameName = new String('shreya')
console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.charAt('b')); // returns s only for any alphabet
console.log(gameName.charAt(2));
console.log(gameName.indexOf('d')); //returns -1 for any value not present in name
console.log(gameName.indexOf('a')) //5

console.log(gameName.slice(-6,4))   //shre
//gameName.trim() => removes space from behind and front of text 