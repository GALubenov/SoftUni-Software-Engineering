function test(args) {
    let days = Number(args[0]);
    let na4alenBalans = 60;
    let i = 1;
    let comm = args[i];
    for (let d = 1; d <= days; d++) {
        let cheker = true;
        let counter = 0;
        while (comm != "Day over") {
            if (comm <= na4alenBalans) {
                let priceOfProduct = Number(args[i]);
                na4alenBalans -= priceOfProduct;
                counter++;
                if (na4alenBalans == 0) {
                    console.log(`Daily limit exceeded! You've bought ${counter} products.`);
                    cheker = false;
                    break;
                }
            }
            i++;
            comm = args[i];
        }
        if (cheker == true) {
            console.log(`Money left from today: ${(na4alenBalans).toFixed(2)}. You've bought ${counter} products.`);
        }
        i++;
        comm = args[i];
        na4alenBalans += 60;
    }
}
test([3, 20,40,40,15, "Day over", 15, 5,10,17,10, "Day over"])