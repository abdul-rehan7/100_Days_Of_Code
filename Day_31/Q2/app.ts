// Write a function to remove the last element from an array and return the removed element.

let cars = ["Ferrari", "Bugatti", "Supra", "Lambo"];

function removeLast(arr: string[]) {
  arr.pop();
  console.log(arr);
}

removeLast(cars);
