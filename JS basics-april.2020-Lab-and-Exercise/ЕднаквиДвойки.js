function solve(input) {
    let n = input[0];
    let sum = Number(input[1]) + Number(input[2]);
    let difference = 0;
    let maxDifference = 0;

    for (let i = 3; i <= n * 2; i += 2) {
        let firstNumber = Number(input[i]);
        let secondNumber = Number(input[i + 1]);
        let tempSum = firstNumber + secondNumber;

        if (sum !== tempSum) {
            difference = Math.abs(sum - tempSum);
            if (difference > maxDifference);
            maxDifference = Math.abs(difference);
        }
        sum = tempSum;
    }
    if (maxDifference === 0) {
        console.log(`Yes, value = ${sum}`);

    } else {
        console.log(`No, maxdiff = ${maxDifference}`);
    }

}
solve([4, 1, 1, 3, 1, 2, 2, 0, 0])