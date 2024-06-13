// Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.
function multipyDecimals(num1, num2) {
    let result = num1 * num2;
    return Math.round(result * 100) / 100;
}
console.log(multipyDecimals(0.1, 0.2));
export {};
