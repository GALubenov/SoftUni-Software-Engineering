function solve(input) {
    let days = +input[0];
    let hours = +input[1];
    let totalSum = 0;

    for (let i = 1; i <= days; i++) {
        let sum = 0;
        for (let j = 1; j <= hours; j++) {

            if (i % 2 === 0 && j % 2 !== 0) {
                sum += 2.5;
            } else if (i % 2 !== 0 && j % 2 === 0) {
                sum += 1.25;
            } else {
                sum += 1;
            }
        }
        totalSum += sum;
        console.log(`Day: ${i} - ${sum.toFixed(2)} leva`);
    }

    console.log(`Total: ${totalSum.toFixed(2)} leva`)
}

solve(
     [5, 2]
    // [2, 5]

);

