let marks = [20, 30, 40, 50, 60];
const newMarks = marks.map((value)=> value + 10);
console.log(marks, newMarks);

let sum = 0;
marks.forEach((value)=> sum = sum+value);
console.log(sum);