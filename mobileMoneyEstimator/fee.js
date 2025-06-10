//prompt user for the amount to send
let amounttosend= Number(prompt("Unatuma Ngapi? (KES):"));

// Constants for fee calculation
const transactionfee =0.015*amounttosend; // 1.5% of the amount sent
const totalamount = amounttosend + transactionfee; // Total amount including fee



// Function to estimate transaction fee and total amount
function estimateTransactionFee(transactionfee, amounttosend,) {

    //let us ensure transaction fee are within the specified limits
    if (transactionfee <10)
        transactionfee = 10; // Minimum fee is Ksh 10
    else if (transactionfee > 70)
        transactionfee = 70; // Maximum fee is Ksh 70

    let totalAmount = amounttosend + transactionfee; // Total amount including fee
    
    

    // Output results
    console.log(`Sending KES ${amounttosend}: .`);
    console.log(`Calculated Transation Fee: KES ${transactionfee}`);
    console.log(`Total amount to be debited: KES ${totalAmount}`);
    console.log('Send Money Securely!')

   //return transactionfee, totalAmount;
    return transactionfee, totalAmount;
}

// Run the function to display transaction fee and total amount
estimateTransactionFee(transactionfee, amounttosend,);