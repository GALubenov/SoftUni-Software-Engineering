function solve(input) {

    let monthlyIncome = +input[0];
    let month = +input[1];
    let unexpectedCost = +input[2];
    let remainingMoney = monthlyIncome - ((monthlyIncome * 0.3) + unexpectedCost);
    let savingSum = month * remainingMoney;

    console.log(`She can save ${((remainingMoney / monthlyIncome) * 100).toFixed(2)}%`);
    console.log(`${savingSum.toFixed(2)}`);
}

solve([1500, 3, 800]
);