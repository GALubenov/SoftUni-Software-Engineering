function abs(args) {

    for (let a = 1; a <= 9; a++) {
        for (let b = 0; b <= 9; b++) {
            for (let c = 0; c <= 9; c++) {
                for (let d = 0; d <= 9; d++) {
                    let sum = a + b + c + d;

                    if (sum === 5) {
                        console.log(`${a}${b}${c}${d}`);
                    } else {
                        continue;
                    }
                }
            }
        }
    }
}
abs();