//prompt the user for the number of cups of Kenyan Chai they want to make
let numberofcups =Number(prompt("Enter the number of chai cups you want to make :"));

//constant for the number of cups
const numberOfCups = numberofcups;


// ingredient calculation
let milk=numberofcups*50; // in ml
let water=numberofcups*200; // in ml
let sugar=numberofcups*2; // in teaspoon
let teaLeaves=numberofcups*1; // in tablespoon

//function to calculate ingredients for Chai
function calculateChaiIngredients(milk, water, sugar, teaLeaves) {
    
    
 //output the ingredients needed for the specified number of cups
  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${water} ml`);
  console.log(`Milk: ${milk} ml`);
    console.log(`Sugar(Sukari): ${sugar} teaspoon`);
   console.log(`Tea Leaves(Majani): ${teaLeaves} tablespoon`);
   console.log('Enjoy your Chai Bora!');

   // return  the ingredients
   return milk,water,sugar,teaLeaves;
  }

   


//run the function to display ingredients
calculateChaiIngredients(milk, water, sugar, teaLeaves);
