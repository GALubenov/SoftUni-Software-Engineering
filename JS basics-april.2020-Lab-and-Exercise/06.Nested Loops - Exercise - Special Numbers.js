function solve(input) {
    let num = +input;
    let result = '';
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let m = 1; m <= 9; m++) {
                    if (num % i === 0 && num % j === 0 && num % k === 0 && num % m === 0) {
                        result += `${i}${j}${k}${m} `
                    }
                }
            }
        }
    }
    console.log(result)
}

solve('3');