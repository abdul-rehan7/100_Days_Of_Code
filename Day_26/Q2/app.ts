// Default Parameters: Write a function that greets a user. It should take the users name as a parameter and say hello. If no name is given, it should greet an anonymous user. 

function greet(name:string = "Anonymous"){
    console.log(`Hello ${name}, How are you?`)
}

greet()
greet("Ahmed")
