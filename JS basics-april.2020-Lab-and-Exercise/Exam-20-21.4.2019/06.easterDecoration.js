function decoration(args) {
    let clients = Number(args[0]);
    let index = 1;
    let totalSum = 0;
    let averageBill = 0;
    for (let i = 1; i <= clients; i++) {
        let productCounter = 0;
        let product = args[index];
        let productPrice = 0;
        while (product != "Finish") {
            if (product == "basket") {
                productPrice += 1.50;
            } else if (product == "wreath") {
                productPrice += 3.80;
            } else if (product == "chocolate bunny") {
                productPrice += 7;
            }
            index++;
            product = args[index];
            productCounter++;
        }
        if (productCounter % 2 == 0) {
            productPrice -= (productPrice * 0.20);
        }
        console.log(`You purchased ${productCounter} items for ${productPrice.toFixed(2)} leva.`);
        index++;
        product = args[index];
        totalSum += productPrice;
    }
    averageBill = totalSum / clients;
    console.log(`Average bill per client is: ${averageBill.toFixed(2)} leva.`);
}
decoration([1, "basket", "wreath", "chocolate bunny", "wreath", "basket", "chocolate bunny", "Finish"])