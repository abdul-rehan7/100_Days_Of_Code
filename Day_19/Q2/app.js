// Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
let Items = [4, "apple", true, 10, "mango", false];
let onlyStrings = Items.filter(item => typeof item == "string");
let onlyNums = Items.filter(item => typeof item == "number");
let onlyBools = Items.filter(item => typeof item == "boolean");
console.log(onlyStrings);
console.log(onlyNums);
console.log(onlyBools);
export {};
