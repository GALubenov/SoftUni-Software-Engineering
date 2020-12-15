function solve(input) {
    let n = +input[0];
    let string = '';
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let m = 1; m <= 9; m++) {
                    if (i + j === k + m && n % (i + j) === 0) {
                        string += `${i}${j}${k}${m} `;
                    }
                }
            }
        }
    }
    console.log(`${string}`);
}

solve([24]);

