//duplicate number remove
function Duplicate(){
let arr = [23,2,4,4,5,5,6,6,77,77];
function dplcRmv(){
    return[...new Set(arr)]
}
console.log(dplcRmv(arr));
}
Duplicate()