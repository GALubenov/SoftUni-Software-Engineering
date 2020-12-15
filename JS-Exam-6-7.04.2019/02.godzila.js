function godzila(args) {
    let budget = Number(args[0]);
    let brStatisti = Number(args[1]);
    let priceObleklo = Number(args[2]);

    let decor = budget * 0.10;
    let sumOfObleklo = brStatisti * priceObleklo;
    if (brStatisti > 150) {
        sumOfObleklo = sumOfObleklo - (sumOfObleklo * 0.10);
    }
    let sumForMovie = decor + sumOfObleklo;
    let leftSum = budget - sumForMovie;

    if (sumForMovie > budget) {
        console.log("Not enough money!")
        console.log(`Wingard needs ${Math.abs(leftSum.toFixed(2))} leva more.`)
    }
    else if (sumForMovie <= budget) {
        console.log("Action!")
        console.log(`Wingard starts filming with ${leftSum.toFixed(2)} leva left.`)
    }
}
godzila([9587.88,
    222,
    55.68,

    57.99

])