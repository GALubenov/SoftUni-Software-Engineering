function solve(input) {

    let first = +input[0]
    let second = +input[1]

    let result = '';
    for (let i = first; i <= second; i++) {
        let oddSum = 0;
        let evenSum = 0;
        let currentNum = '' + i;

        for (let j = 0; j < currentNum.length; j++) {

            if (j % 2 === 0) {
                evenSum += +currentNum[j];
            } else {
                oddSum += +currentNum[j];
            }
        }

        if (oddSum === evenSum) {
            result += i + ' ';
        }
    }

 console.log(result);
}

solve([
    100000,
    100050

]);