function solve(input) {
    input = +input;

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;

    for (let i = 1; i <= input; i++) {

        if (i % 2 !== 0) {

            if (i < 10) {
                count1++;
            }

            if (i % 10 === 7) {
                count3++;
            }

        } else {
            count2++;
        }

        if (100 % i === 0) {
            count4++;
        }
    }

    console.log(`${((count1 / input) * 100).toFixed(2)}%`);
    console.log(`${((count2 / input) * 100).toFixed(2)}%`);
    console.log(`${((count3 / input) * 100).toFixed(2)}%`);
    console.log(`${((count4 / input) * 100).toFixed(2)}%`);
}

solve(
    '35'
);