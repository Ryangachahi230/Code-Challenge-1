function calculateBodaFare() {
  let distanceInKm = Number(prompt("Unafika wapi Mkubwa? Kilometer ngapi?"));
  
  // Define constants
  const baseFare = 50; // KES
  const chargePerKm = 15; // KES per km
  
  // Calculate fare
  let distanceFare = distanceInKm * chargePerKm;
  let totalFare = baseFare + distanceFare;
  
  // Print results to console
  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${distanceFare}`);
  console.log(`Total: KES ${totalFare}`);
  console.log("Panda Pikipiki!");
}

// Call the function to run it
calculateBodaFare();