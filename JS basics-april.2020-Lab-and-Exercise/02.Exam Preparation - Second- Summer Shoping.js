function solve(input) {
    let budget = +input[0];
    let beachTowelPrice = +input[1];
    let percentageDiscount = +input[2] / 100;

    let umbrelaPrice = (2 / 3) * beachTowelPrice;
    let flipFlopPrice = umbrelaPrice * 0.75;
    let beachBagPrice = (1 / 3) * (beachTowelPrice + flipFlopPrice);
    let discount = (beachTowelPrice + umbrelaPrice + flipFlopPrice + beachBagPrice) * percentageDiscount;
    let totalSum = (beachTowelPrice + umbrelaPrice + flipFlopPrice + beachBagPrice) - discount;

    if (totalSum <= budget) {
        console.log(`Annie's sum is ${totalSum.toFixed(2)} lv. She has ${(budget - totalSum).toFixed(2)} lv. left.`);
    } else {
        console.log(`Annie's sum is ${totalSum.toFixed(2)} lv. She needs ${(totalSum - budget).toFixed(2)} lv. more.`);
    }
}

solve(
    // [40, 15, 5]
     [25, 6, 10]
   // [30, 17, 3]
);