function solve(input) {
    // 500 / 16 = 31 (4)
    // 31 / 16 = 1 (F)
    // 1 / 16 = 0 (1)
    // Result: 0x1F4
    let digit = Number(input);
    let result = '';
    while (digit > 0) {
        let reminder = digit % 16;

        if (reminder === 10) {
            reminder = 'A';
            result = reminder + result;
        } else if (reminder === 11) {
            reminder = 'B';
            result = reminder + result;
        } else if (reminder === 12) {
            reminder = 'C';
            result = reminder + result;
        } else if (reminder === 13) {
            reminder = 'D';
            result = reminder + result;
        } else if (reminder === 14) {
            reminder = 'E';
            result = reminder + result;
        } else if (reminder === 15) {
            reminder = 'F';
            result = reminder + result;
        } else {
            result = reminder + result;
        }

        digit = digit / 16;
        digit = Math.floor(digit);

    }

    console.log(result);

}

solve(47094);//'B7F6'
solve(500);//'1F4'
