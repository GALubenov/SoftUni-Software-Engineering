function solve(input) {
    let start = +input[0];
    let end = +input[1];
    let magicNum = +input[2];
    let count = 0;

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            count++;
            let sum = i + j;
            if (sum === magicNum) {
                return console.log(`Combination N:${count} (${i} + ${j} = ${magicNum})`);
            }
        }
    }

    console.log(`${count} combinations - neither equals ${magicNum}`);
}

solve(
    [1, 10, 5]
)