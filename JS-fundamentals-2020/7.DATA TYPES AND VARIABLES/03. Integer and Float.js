function solve(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    if (sum === Math.trunc(num1 + num2 + num3)) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }
}

solve(
    9, 100, 1.1
)