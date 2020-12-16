function solve(input) { //двоично число към десетично// binary to decimal
    //multiply each digit to its magnitude (power of 2)
    // 1011 = 1*2^3 + 0*2^2 + 1*2^1 + 1*2^0 = 1*8 + 0*4 + 1*2 + 1*1 = 8+0+2+1 = 11; 
    let sum = 0;
    let magnitude = 1;

    for (let i = input.length - 1; i >= 0; i--) {
        let digit = Number(input[i]);

        sum += digit * magnitude;
        magnitude *= 2;
    }

    console.log(sum)
}

solve('1000111');
solve('1011');
