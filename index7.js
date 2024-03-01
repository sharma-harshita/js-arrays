let marks = [20, 30, 40, 50, 60];
const newMarks = marks.filter(value =>  value>30);
console.log(marks);
console.log(newMarks);

const finalValue = newMarks.reduce((acc, cur) => acc+cur, 100);
console.log(finalValue);