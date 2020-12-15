function solve(input) {
    let start = +input[0];
    let end = +input[1];
    let magicNum = +input[2];

    let sum = 0;
    let counter = 0;
    let firstNum = 0;
    let secondNum = 0;
    let flag = false;

    for (let i = start; i <= end; i++) {

        for (let j = start; j <= end; j++) {
            counter++;
            sum = i + j;
            if (sum === magicNum) {
                firstNum = i;
                secondNum = j;
                flag = true;
                break;
            }
        }
        if (sum === magicNum) {
            flag = true;
            break;
        }
    }

    if (flag) {
        console.log(`Combination N:${counter} (${firstNum} + ${secondNum} = ${sum})`);
    } else {
        console.log(`${counter} combinations - neither equals ${magicNum}`);
    }
}

solve(
    // [1, 10, 5]
    // [23, 24,20]
    [88, 888, 2000]
);

