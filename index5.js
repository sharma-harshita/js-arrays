let marks = [10, 25, 45, 65, 15];
function checkCond(value, index, arr){
    return value>20
}
const value1 = marks.find(checkCond);
const value2 = marks.findIndex(checkCond);
const value3 = marks.findLast(checkCond);
const value4 = marks.findLastIndex(checkCond);
console.log(value1);
console.log(value2);
console.log(value3);
console.log(value4);