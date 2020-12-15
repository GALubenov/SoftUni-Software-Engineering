function solve(input) {
    let coin1 = +input[0];
    let coin2 = +input[1];
    let coin5 = +input[2];
    let sum = +input[3];

    for (let i = 0; i <= coin1; i++) {
        for (let j = 0; j <= coin2; j++) {
            for (let k = 0; k <= coin5; k++) {
                if (((i * 1) + (j * 2) + (k * 5)) === sum) {
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`);
                }
            }
        }
    }
}

solve(
    // [3, 2, 3, 10]
    [5, 3, 1, 7]

);

