function solve(input) {
    let num = +input[0];
    let flag = false;
    let string = '';
    let counter = 0;
    let password = '';
    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {
                    if (a < b && c > d) {
                        if (((a * b) + (c * d)) === num) {
                            counter++;
                            string += `${a}${b}${c}${d} `
                            if (counter === 4) {
                                password = `${a}${b}${c}${d}`;
                                flag = true;
                            }
                        }
                    }
                }
            }
        }
    }

    console.log(string)
    if (flag) {
        console.log(`Password: ${password}`)
    } else {
        console.log('No!')
    }
}

solve(
    // [11],
    // [139],
   // [110],
    [55]

);

