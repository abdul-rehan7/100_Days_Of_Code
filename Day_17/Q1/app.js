"use strict";
// Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby. 
function logHobbies(...hobbies) {
    hobbies.forEach(hobby => {
        console.log(`I like ${hobby} hobby`);
    });
}
logHobbies("Drawing", "running", "Coding");
