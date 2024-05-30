// Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student. 

interface student {
    name:string
    age:number
    class:string
}

let student1:student = {
    name:"Abdul Rehan",
    age:17,
    class:"Artificial Intelligence"
}

console.log(student1);
