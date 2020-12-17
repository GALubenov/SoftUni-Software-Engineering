function solve(input) {
    let typeOfCustomer = input.pop();
    let priceWithoutTaxes = 0;
    let totalPrice = 0;
    let taxes = 0;

    for (let line of input) {
        if (Number(line) > 0) {
            priceWithoutTaxes += Number(line);
        } else {
            console.log("Invalid price!");
        }
    }

    if (priceWithoutTaxes > 0) {
        taxes = priceWithoutTaxes * 0.2;
        totalPrice = priceWithoutTaxes + taxes;

        if (typeOfCustomer === 'special') {
            totalPrice -= totalPrice * 0.1;
        }

        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);

    } else {
        console.log("Invalid order!");
    }
}

solve(
     ['1050', '200', '450', '2', '18.50', '16.86', 'special']
    // ['1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular']
   // ['regular']

)