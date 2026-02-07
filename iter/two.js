const cp =  ['c++','java','python','js','ruby']
//-----------
cp.forEach((item)=>{
    console.log(item)
})
//-----------
cp.forEach(function(ele){
    console.log(ele)
})
//------------
function printMe (value){
    console.log(value)
}
cp.forEach(printMe)

// item,index,array can be passed in forEach loop as parameters