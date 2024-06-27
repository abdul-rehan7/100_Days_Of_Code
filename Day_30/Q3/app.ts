// Generating Random Numbers: Write a function that generates a random number between 1 and 10, inclusive. 

function generateRandom():number{
    return Math.floor((Math.random() * 20)) + 1;
}

console.log(generateRandom())

