const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length)
console.log(balance.toFixed(2)) // decimal places needed

const otherNumber = 1123.45
console.log(otherNumber.toPrecision(4)) //1123
console.log(otherNumber.toPrecision(5)) //1123.5



console.log(Math.random());
console.log((Math.random()*10)+1)
console.log(Math.floor((Math.random()*10)+1))

max=20
min=10

console.log(Math.floor(Math.random()*(max-min+1))+min)