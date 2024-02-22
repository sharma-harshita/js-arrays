let arr = [1,2,3,[1,2,4, [2,3,4]]];
const newArr = arr.flat(2);
console.log(newArr);


let num = [1,2,3,4];
num.splice(1,1,"a");
num.splice(1,0,"a");
console.log(num);

const a = num.slice(1,2)
console.log(a, num);