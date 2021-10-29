const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];
//Annoynomous Function
// const pass = grades.filter(function(num) {
//   return num >= 70;
// });
// console.log("There were", pass);

//Arrow Function
const pass = grades.filter(num => num >= 70);
console.log(pass);
