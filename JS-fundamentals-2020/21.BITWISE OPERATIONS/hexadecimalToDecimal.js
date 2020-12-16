function solve(input) { //шестнадесетично число към десетично// hexadecimal to decimal
    //base = 16; multiply each digit to its magnitude (power of 2)
    // 0xB7F6 = B*16^3 + 7*16^2 + F*16^1 + 6*16^0  =
    //  = 11*4096 + 7*256 + 15*16 + 6*1 =
    //  = 45056 + 1792 + 240 + 6 = 47094

    let sum = 0;
    let magnitude = 1;
    for (let i = input.length - 1; i >= 0; i--) {
        let char = input[i];
        if (char === 'A') {
            sum += 10 * magnitude;
            magnitude *= 16;
        } else if (char === 'B') {
            sum += 11 * magnitude;
            magnitude *= 16;
        } else if (char === 'C') {
            sum += 12 * magnitude;
            magnitude *= 16;
        } else if (char === 'D') {
            sum += 13 * magnitude;
            magnitude *= 16;
        } else if (char === 'E') {
            sum += 14 * magnitude;
            magnitude *= 16;
        } else if (char === 'F') {
            sum += 15 * magnitude;
            magnitude *= 16;
        } else {
            let digit = Number(char);
            sum += digit * magnitude;
            magnitude *= 16;
        }
    }

    console.log(sum)
}

solve('B7F6');//47094
solve('1F4');//500
