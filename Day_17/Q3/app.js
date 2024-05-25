"use strict";
// Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function. 
// ========================== USING SIMPLE FUNCTION ==========================      
function findArea(length, width) {
    return length * width;
}
let area = findArea(2, 5);
console.log(area);
// ========================== IN ARROW FUNCTION ==========================      
let findingArea = (l, b) => l * b;
let area2 = findingArea(2, 4);
console.log(area2);
