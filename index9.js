const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];

const newArr = [arr1, arr2];
console.log(newArr.flat());

const newArr2 = [...arr1, ...arr2];
console.log(newArr2);

const newValue = Array.from("Hello");
const newValue2 = Array.from(true);
console.log(newValue, newValue2);