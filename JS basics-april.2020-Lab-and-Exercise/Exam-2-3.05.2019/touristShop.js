function shop(args) {
    let budget = Number(args[0]);
    let i = 1
    let counterProduct = 0;
    let sum = 0;

    while (true) {
        let command = args[i];
        let finalSum = budget - sum;
        if (command === "Stop" || finalSum < 0) {
            break;
        }
        let product = command;
        let productPrice = Number(command);
        if (productPrice < budget) {
            counterProduct++
            if (counterProduct == 3) {
                productPrice /= 2;
            }
            sum += Number(productPrice);
        }
        i++
    }
    if (budget-sum > 0) {
        console.log(`You bought ${counterProduct} products for ${Number(sum.toFixed(2))} leva.`);
    } else {
        console.log("You don't have enough money!");
        console.log(`You need ${Math.abs(sum - budget).toFixed(2)} leva!`);
    }
}
shop([154,
    "Thermal underwear",
    24,
    "Sunscreen",
    45,
    "Sunscreen",
    45,"Sunscreen",
    45,"Sunscreen",
    45,
    "Sunscreen",
    45
    ])