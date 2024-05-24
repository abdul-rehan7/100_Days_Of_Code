// Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
let laptops = [
    { make: "Dell", model: "XPS 15", year: 2021 },
    { make: "Apple", model: "MacBook Pro", year: 2020 },
    { make: "HP", model: "Spectre x360", year: 2021 },
];
let [laptop1, laptop2, laptop3] = laptops;
console.log(`This is a ${laptop1.make} ${laptop1.model} ${laptop1.year} Laptop`);
console.log(`This is a ${laptop2.make} ${laptop2.model} ${laptop2.year} Laptop`);
console.log(`This is a ${laptop3.make} ${laptop3.model} ${laptop3.year} Laptop`);
export {};
