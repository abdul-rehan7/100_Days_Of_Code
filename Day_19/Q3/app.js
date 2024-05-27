// Find the Average Grade: Given a list of grades, calculate the average grade. 
let grades = [10, 50, 45, 86, 90];
let totalGrades = grades.reduce((a, b) => a + b);
let Average = totalGrades / grades.length;
console.log(`The Average Marks are ${Average}`);
export {};
