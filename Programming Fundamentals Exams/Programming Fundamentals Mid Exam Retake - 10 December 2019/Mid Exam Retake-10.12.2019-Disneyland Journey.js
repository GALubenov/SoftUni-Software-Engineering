function solve(input) {
    let journeyCost = +input[0];
    let numberMonths = +input[1];

    let sum = 0;
    let count = 0;
    for (let i = 1; i <= numberMonths; i++) {
        count++;
        if (count === 4) {
            count = 0;
            sum += sum * 0.25;
        }

        if (i > 1 && i % 2 !== 0) {
            sum -= sum * 0.16;
        }

        sum += journeyCost * 0.25;

    }

    if (sum >= journeyCost) {
        let money = sum - journeyCost;
        console.log(`Bravo! You can go to Disneyland and you will have ${money.toFixed(2)}lv. for souvenirs.`);
    } else {
        let money = journeyCost - sum;
        console.log(`Sorry. You need ${money.toFixed(2)}lv. more.`);
    }
}

solve(
     ['1000', '4']
   // ['3265', '3']
)