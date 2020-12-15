function solve(input) {
    input = +input;
    if (input % 2 === 0) {
        for (let i = 2; i <= input; i += 2) {
            console.log(`Current number: ${i}. Cube: ${i ** 3}`);
        }

    } else {
        for (let i = 1; i <= input; i += 2) {
            console.log(`Current number: ${i}. Cube: ${i ** 3}`);
        }
    }
}

solve(
    '5'
);