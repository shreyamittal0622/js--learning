const obj ="shreya mittal"
for (const element of obj) {
   // console.log(`each char is ${element}`)
    
}
const map = new Map()
map.set('IN','india')
map.set ('USA',' United States of America')
map.set  ('Fr','France')
map.set('IN','india')
console.log(map)


for (const key of map) {
    console.log(key)
    
}//gives in form of array

for (const [key,value] of map) {
    console.log(key,':',value)
    
}//destructure of array

const myObject ={
    sb:'strawbwerry',
    ch:'cherry',
    ap:'apple'

}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
    
}//for in loop id used for objects 