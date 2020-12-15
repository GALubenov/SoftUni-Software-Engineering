function solve(args) {
    let age = Number(args[0]);
    let pricePeralnq = Number(args[1]);
    let priceToy = Number(args[2]);

    let saveMoney = 0;
    let saveToy = 0;
    let counter = 0;
    let sum = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            counter++;
            saveMoney += 10;
            sum += saveMoney;
        } else {
            saveToy++;
        }
    }
    let sumOfToy = saveToy * priceToy;
    sum += sumOfToy;
    sum -= counter;

    if (sum >= pricePeralnq) {
        console.log(`Yes! ${(sum - pricePeralnq).toFixed(2)}`)
    } else {
        console.log(`No! ${(pricePeralnq - sum).toFixed(2)}`)
    }
}
solve([10, 170, 6])

function solve(input) {
    let age = input[0];
    let price = input[1];
    let gift = input[2];

    let sumAgeA = 0;
    let sumAgeB = 0;
    let sumToy = 0;
    let sumTotal = 0;
    let counter = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 == 0) {
            sumAgeA = sumAgeA + 10;
            sumAgeB = sumAgeA + sumAgeB;
            counter++;
        } else {
            sumToy++;
        }
    }
    sumToy = sumToy * gift;
    sumTotal = (sumAgeB + sumToy) - counter;
    if (price > sumTotal) {
        console.log(price - sumTotal)
    } else {
        console.log(sumTotal - price)
    }
}
solve([21, 1570.98, 3])