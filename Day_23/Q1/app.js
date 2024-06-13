// Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., `5`). Return their sum as a number.
function mixedTypes(Num, Str) {
    return Num + Number(Str);
}
console.log(mixedTypes(2, "5"));
export {};
