function solve(input) {

    let num = Number(input);
    let result = [];

    if (num < 100) {
        result.unshift("%".repeat(num / 10));
        result.push(".".repeat(10 - (num / 10)));
        console.log(`${num}% [${result.join('')}]`);
        console.log('Still loading...')

    } else if (num === 100) {
        result.push("%".repeat(10));
        console.log('100% Complete!')
        console.log(`[${result.join('')}]`);
    }
}

solve(
    0
)