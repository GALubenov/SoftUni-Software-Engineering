function solve(input) {
    let first = +input[0];
    let second = +input[1];

    let string = '';

    for (let i = first; i <= second; i++) {
        for (let j = first; j <= second; j++) {
            for (let k = first; k <= second; k++) {
                for (let m = first; m <= second; m++) {
                    if (i > m && (j + k) % 2 === 0) {
                        if (i % 2 === 0 && m % 2 !== 0 || i % 2 !== 0 && m % 2 === 0) {
                            string += `${i}${j}${k}${m} `;
                        }
                    }
                }
            }
        }
    }

    console.log(`${string}`);
}

solve([3, 5]);

