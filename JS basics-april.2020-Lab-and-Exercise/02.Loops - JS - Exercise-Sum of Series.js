function solve(input) {
    input = +input;

    let sum = 0;

    for (let i = 0; i <= input; i++) {
        sum += i * i;
    }

    console.log(sum);

}

solve(
    '7'
);