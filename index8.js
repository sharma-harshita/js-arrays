const marks = [45, 63, 25, 46, 89];
const result = marks.every(value => value>35 );
const result2 = marks.every(value => value>20 );
const result3 = marks.some(value => value<10 );
const result4 = marks.some(value => value>80 );
console.log(result, result2, result3, result4);