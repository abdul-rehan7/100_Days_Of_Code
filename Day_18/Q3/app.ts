// Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.

import { stringify } from "querystring";

// A way to make a flexible list
function createObject(key: string, value: string) {
  let dynamicObject:{[key:string]:string}= {};
  dynamicObject[key] = value;
  return dynamicObject;
}

let userPreference = createObject("theme","Dark")
console.log(userPreference);



