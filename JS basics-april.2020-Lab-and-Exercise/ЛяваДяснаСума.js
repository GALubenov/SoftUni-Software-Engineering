function solve(args) {
    let n = Number(args[0]);
    let sumL = 0;
    let sumR = 0;

    for (let i = 1; i <= n; i++) {
        console.log(i)
        sumL = sumL + Number(args[i]);
        sumR = sumR + Number(args[i + n]);
        console.log(sumL)
        console.log(sumR)

    }
    let differenceBetweenSum = Math.abs(sumL - sumR);
    if (differenceBetweenSum === 0) {
        console.log(`Yes, sum = ${sumL}`);
    } else {
        console.log(`No, diff = ${differenceBetweenSum}`);
    }
}
solve([2, 10, 100, 60, 50]);