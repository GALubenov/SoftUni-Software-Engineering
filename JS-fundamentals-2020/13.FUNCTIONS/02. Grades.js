function solve(input) {
    input = Number(input);

    if (input < 3.00) {
        console.log("Fail (2)");
    } else if (input >= 3.00 && input < 3.5) {
        console.log(`Poor (${input.toFixed(2)})`);
    } else if (input >= 3.50 && input < 4.5) {
        console.log(`Good (${input.toFixed(2)})`);
    } else if (input >= 4.50 && input < 5.5) {
        console.log(`Very good (${input.toFixed(2)})`);
    } else if (input >= 5.50) {
        console.log(`Excellent (${input.toFixed(2)})`);
    }
}

solve(
    '5.33'
)