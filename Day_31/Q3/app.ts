// Find the index of `Banana` in an array of fruits and replace it with `Mango`.

import inquirer from "inquirer";

let fruits = ["Apple", "Orange", "Banana", "Grapes"];
console.log(`\n\t This is the array of fruits 👉 ${fruits} \n`)

let input = await inquirer.prompt([
    {
        name:"Q1",
        type:"input",
        message:"Enter the Fruit to be replaced : "
    },{
        name:"Q2",
        type:"input",
        message:"Enter the Fruit to be Added : "
    }
])

function replaceFruit(fruit: string) {
  let index = fruits.indexOf(input.Q1);
  fruits[index] = fruit;
  console.log(`\n\t This is the Modified array of fruits 👉 ${fruits}`);
}

replaceFruit(input.Q2);
