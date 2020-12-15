function solve(input) {
    let steps = 0;
    let i = 0;
    let flag = true;

    while (input[i] !== 'Going home') {
        steps += +input[i];
        if (steps >= 10000) {
            console.log(`Goal reached! Good job!`);
            flag = false;
            break;
        }

        i++;
    }

    steps += +input[i + 1];

    if (flag) {
        if (steps >= 10000) {
            console.log(`Goal reached! Good job!`);
        } else {
            console.log(`${10000 - steps} more steps to reach goal.`);
        }
    }

}

solve(
    //  [
    //     1000,
    //      1500,
    //      2000,
    //      6500
    //  ]
    [
        1500,
        3000,
        250,
        1548,
        2000,
        'Going home',
        2000

    ]
    //  [
    //      1500,
    //      300,
    //     2500,
    //     3000,
    //     'Going home',
    //     200
    // ]

)