// Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function. 


// ========================== USING SIMPLE FUNCTION ==========================      
function findArea(length:number,width:number):number{
return length * width;
}

let  area = findArea(2,5)
console.log(area)

// ========================== IN ARROW FUNCTION ==========================      
let findingArea = (l:number,b:number):number => l * b

let area2 = findingArea(2,4)
console.log(area2);
