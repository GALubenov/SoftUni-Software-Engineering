function sumirane(args) {
    let n = Number(args[0]);
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        let currentNumber = Number(args[i]);
        sum += currentNumber;
    }
    console.log(sum);
}
sumirane(["3", 10, 20, 5]);