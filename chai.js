function calculateChaiIngredients() {
  let numberOfCups = Number(prompt("Karibu! How many cups of Chai Bora would you like to make?"));
  
  // Calculate ingredients based on number of cups
  let water = numberOfCups * 200; // ml
  let milk = numberOfCups * 50; // ml
  let teaLeaves = numberOfCups * 1; // tablespoons
  let sugar = numberOfCups * 2; // teaspoons
  
  // Print results to console
  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${water} ml`);
  console.log(`Milk: ${milk} ml`);
  console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
  console.log(`Sugar (Sukari): ${sugar} teaspoons`);
  console.log("Enjoy your Chai Bora!");
}

// Call the function to run it
calculateChaiIngredients();