// Prompt user for distance
let distanceInKilometers = Number(prompt("Unafika wapi Mkubwa? Kilometer ngapi?:"));

// Constants for fare calculation
const farePerKilometer = 15; // in Ksh
const baseFare = 50; // in Ksh

// Function to calculate and display boda fare
function calculateBodaFare(distance, farePerKm, baseFare) {
    let fare = distance * farePerKm;
    let totalFare = fare + baseFare;

    // Output results
    console.log(`Uko kwote ${distance} Kilometers:`);
    console.log(`Ukikalia Pikipiki: ${baseFare} KES`);
    console.log(`Mpaka huko: ${fare} KES`);
    console.log(`Total : ${totalFare} KES`);
    console.log('Panda Pikipiki!')

// return totalFare, fare, baseFare;
    return totalFare, fare, baseFare;
}

//  run the function to display distance, fare, and total fare

    calculateBodaFare(distanceInKilometers, farePerKilometer, baseFare);

