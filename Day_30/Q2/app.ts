// Rounding Numbers: Create a function that takes a number with decimals (e.g., `3.14159`) and rounds it to two decimal places. 

function roundOff(num:number){
    return num.toFixed(2)
}

console.log(roundOff(12.345))