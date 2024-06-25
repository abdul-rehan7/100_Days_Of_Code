// Updating Object Properties: Add a property named `color` to the existing car object, and then update the `year` property to `2021`. Show how to perform these operations.

let new_car: { make: string; model: string; year: number; color?: string } = {
  make: "Honda",
  model: "Civic",
  year: 2022,
};

new_car.year = 2021; // Update year to 2021

new_car.color = "Red"; // Add color property

console.log(new_car);
