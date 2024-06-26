// Checking for Text Presence: Create a function that checks if the word `JavaScript` is present in a given string. It should return `true` if found, otherwise `false`.
import inquirer from "inquirer";
let ask = await inquirer.prompt([
    { name: "Q1", type: "input", message: "Enter the Word to search..." },
    { name: "Q2", type: "input", message: "Enter the Paragraph : " },
]);
function hasJavaScript(str) {
    return str.includes(ask.Q1);
}
console.log(hasJavaScript(ask.Q2));
