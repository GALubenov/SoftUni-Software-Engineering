function paint(args) {
    let razmerEggs = args[0];
    let colorEggs = args[1];
    let brPartidi = Number(args[2]);
    let sum = 0;
    if (razmerEggs === "Large") {
        if (colorEggs === "Red") {
            sum = brPartidi * 16;
        } if (colorEggs === "Green") {
            sum = brPartidi * 12;
        } if (colorEggs === "Yellow") {
            sum = brPartidi * 19;
        }
    }
    if (razmerEggs === "Medium") {
        if (colorEggs === "Red") {
            sum = brPartidi * 13;
        } if (colorEggs === "Green") {
            sum = brPartidi * 9;
        } if (colorEggs === "Yellow") {
            sum = brPartidi * 7;
        }
    }if (razmerEggs === "Small") {
        if (colorEggs === "Red") {
            sum = brPartidi * 9;
        } if (colorEggs === "Green") {
            sum = brPartidi * 8;
        } if (colorEggs === "Yellow") {
            sum = brPartidi * 5;
        }
    }
    console.log(`${Math.abs(sum - (sum * 0.35)).toFixed(2)} leva.`)
}
paint(["Large", "Red", 7])