function solve(input) {

    let neededExperience = +input.shift();
    let countOfBattle = +input.shift();
    let battleCount = 1;
    let sum = 0;

    for (let line of input) {
        sum += +line;

        if (battleCount % 3 === 0) {
            sum += (line * 0.15);
        }
        if (battleCount % 5 === 0) {
            sum -= (line * 0.1);
        }

        if (sum >= neededExperience) {
            break;
        }
        if (countOfBattle === battleCount) {
            break;
        }
        battleCount++;
    }

    if (sum >= neededExperience) {
        console.log(`Player successfully collected his needed experience for ${battleCount} battles.`);

    } else {
        console.log(`Player was not able to collect the needed experience, ${Math.abs(neededExperience - sum).toFixed(2)} more needed.`);
    }


}

solve(
    // ['500', '5', '50', '100', '200', '100', '30']
    // [    '400', '5',    '50',  '100',    '200', '100',    '20'  ]
    [500, 5, 50, 100, 200, 100, 20]
);