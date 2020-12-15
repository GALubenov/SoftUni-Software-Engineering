function shop(args) {
    let brEggs = Number(args[0]);
    let count = args.length;
    let brProdadeniEggs = 0;

    for (let i = 1; i < count; i++) {
        let comm = args[i];
        if (comm === "Buy") {
            i++;
            comm = Number(args[i]);
            if (comm > brEggs) {
                console.log(`Not enough eggs in store!`)
                console.log(`You can buy only ${brEggs}.`)
                break;
            }
            brProdadeniEggs += comm;
            brEggs -= comm;
        }
        if (comm === "Fill") {
            i++;
            comm = Number(args[i]);
            brEggs += comm;
        }
        if (comm === "Close") {
            i++;
            console.log(`Store is closed!`);
            console.log(`${brProdadeniEggs} eggs sold.`);
            break;
        }
    }
}
shop([20, "Fill", 30, "Buy", 15, "Buy", 20, "Close"])