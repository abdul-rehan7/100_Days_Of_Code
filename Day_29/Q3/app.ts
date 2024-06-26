// Extracting a Substring: Demonstrate how to extract the first 10 characters from a string. 


import inquirer from "inquirer";

let ask = await inquirer.prompt([{
    name:"Q1",
    type:"input",
    message:"Enter The starting position :"
},{
    name:"Q2",
    type:"input",
    message:"Enter The Ending position :"
}])

function extractFirstTenChars(str: string): string {
    return str.substring(ask.Q1,ask.Q2); 
    
  }
  
  console.log(extractFirstTenChars("Hello, JavaScript world!")); 
  
  
                