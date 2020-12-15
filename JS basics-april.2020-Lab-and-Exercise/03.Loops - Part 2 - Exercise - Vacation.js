function solve(input) {
    let moneyForJourney = +input.shift();
    let ownedMoney = +input.shift();

    let dayCounter = 0;
    let spendCounter = 0;

    while (ownedMoney < moneyForJourney && spendCounter < 5) {
        let command = input.shift();
        let money = +input.shift();

        if (command === 'spend') {
            ownedMoney -= money;
            if (ownedMoney < 0) {
                ownedMoney = 0;
            }
            spendCounter++;
        } else if (command === 'save') {
            ownedMoney += money;
        }
        dayCounter++;
    }

    if (spendCounter === 5) {
        console.log(`You can't save the money.`);
        console.log(`${dayCounter}`);
    }

    if (ownedMoney >= moneyForJourney) {
        console.log(`You saved the money for ${dayCounter} days.`);
    }
}

solve(
    [
        110,
        60,
        'spend',
        10,
        'spend',
        10,
        'spend',
        10,
        'spend',
        10,
        'spend',
        10

    ]

    // [
    //     2000,
    //     1000,
    //      'spend',
    //     1200,
    //     'save',
    //     2000
    // ]

    //  [
    // 250,
    //  150,
    //  'spend',
    //  50,
    //  'spend',
    //  50,
    //  'save',
    //  100,
    //  'save',
    //  100
    //  ]

)