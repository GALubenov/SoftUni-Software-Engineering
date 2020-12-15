function solve(input) {
    input = Number(input);

    if (input !== 0) {
        if (input >= -100 && input <= 100) {
            console.log('Yes');
        } else {
            console.log('No');
        }
    } else {
        console.log('No');
    }
}

solve(
    '101'
)