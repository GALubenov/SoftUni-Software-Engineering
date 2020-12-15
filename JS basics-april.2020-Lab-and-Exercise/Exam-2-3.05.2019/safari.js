function safari(args) {
    let budget = Number(args[0]);
    let fuel = Number(args[1]);
    let day = args[2];

    let fuelPrice = 2.10 * fuel;
    let sum = fuelPrice + 100;
    let finalSum = 0;

    if (budget > sum) {
        if (day === "Saturday") {
            finalSum = sum - (sum * 0.10);
            console.log(`Safari time! Money left: ${(budget - finalSum).toFixed(2)} lv. `);
        } else if (day === "Sunday") {
            finalSum = sum - (sum * 0.20);
            console.log(`Safari time! Money left: ${(budget - finalSum).toFixed(2)} lv. `);
        }

    } else if (budget < sum) {
        if (day === "Saturday") {
            finalSum = sum - (sum * 0.10);
            console.log(`Not enough money! Money needed: ${Math.abs(budget - finalSum).toFixed(2)} lv.`);
        } else if (day === "Sunday") {
            finalSum = sum - (sum * 0.20);
            console.log(`Not enough money! Money needed: ${Math.abs(budget - finalSum).toFixed(2)} lv.`);
        }
    }
}
safari([1000, 10, "Sunday"])