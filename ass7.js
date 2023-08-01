//Longest word finding
function Longest(){
let word= ("Hello there i am javascript");
let str= word.split(" ");

let newArr=[]
    for (let i of str){
        newArr.push(i.length)
    }
    let newShort=newArr.sort(function(a,b){
        return b-a
    })
    let final = str.filter((val) => val.length === newShort[0] );
console.log(final)
}
Longest()