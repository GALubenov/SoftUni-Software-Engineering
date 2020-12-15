function solve(input) {
    let num = +input;
    let count = 0;
    for (let i = 0; i <= num; i++) {

        for (let j = 0; j <= num; j++) {

            for (let k = 0; k <= num; k++) {
                let sum = i + j + k;
                if (sum === num) {
                    count++;
                }
            }
        }
    }

    console.log(count)
}

solve(20)