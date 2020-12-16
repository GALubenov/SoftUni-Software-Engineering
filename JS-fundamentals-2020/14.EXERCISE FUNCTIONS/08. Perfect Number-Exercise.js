function solve(input) {
    let number = Number(input)
    let result = 0;

    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            result += i;
        }
    }

    if (result === number) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }
}

solve(
    // 6
    // 28
    1236498
)