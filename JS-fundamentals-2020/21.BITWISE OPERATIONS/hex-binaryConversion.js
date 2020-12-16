function solve(input) {
    /*A2E3F = 1010 0010 1110 0011 1111
    A = 1010
    2 = 0010
    E = 1110
    3 = 0011
    F = 1111
    */
    /*1010 0010 1110 0011 1111 = A2E3F
    1010b = 10dec = Ahex
    0010b = 2dec = 2hex
    1110b = 14dec = Ehex
    0011b = 3dec = 3hex
    1111b = 15dec = Fhex
    */

    let result = '';

    for (let i = input.length - 1; i >= 0; i--) {
        let char = input[i];

        if (char === 'A') {
            let digit = 10;
            let binary = '';
            while (digit > 0) {
                let reminder = digit % 2;
                binary = reminder + binary;
                digit = digit / 2;
                digit = Math.floor(digit);
            }
            result = binary + ' ' + result;

        } else if (char === 'B') {

            let digit = 11;
            let binary = '';
            while (digit > 0) {
                let reminder = digit % 2;
                binary = reminder + binary;
                digit = digit / 2;
                digit = Math.floor(digit);
            }
            result = binary + ' ' + result;
        } else if (char === 'C') {

            let digit = 12;
            let binary = '';
            while (digit > 0) {
                let reminder = digit % 2;
                binary = reminder + binary;
                digit = digit / 2;
                digit = Math.floor(digit);
            }
            result = binary + ' ' + result;
        } else if (char === 'D') {

            let digit = 13;
            let binary = '';
            while (digit > 0) {
                let reminder = digit % 2;
                binary = reminder + binary;
                digit = digit / 2;
                digit = Math.floor(digit);
            }
            result = binary + ' ' + result;
        } else if (char === 'E') {

            let digit = 14;
            let binary = '';
            while (digit > 0) {
                let reminder = digit % 2;
                binary = reminder + binary;
                digit = digit / 2;
                digit = Math.floor(digit);
            }
            result = binary + ' ' + result;
        } else if (char === 'F') {

            let digit = 15;
            let binary = '';
            while (digit > 0) {
                let reminder = digit % 2;
                binary = reminder + binary;
                digit = digit / 2;
                digit = Math.floor(digit);
            }
            result = binary + ' ' + result;
        } else {
            let digit = Number(char);

            let binary = '';
            while (digit > 0) {
                let reminder = digit % 2;
                binary = reminder + binary;
                digit = digit / 2;
                digit = Math.floor(digit);
            }

            if (4 - binary.length === 1) {
                binary = '0' + binary;
            } else if (4 - binary.length === 2) {
                binary = '00' + binary;
            } else if (4 - binary.length === 3) {
                binary = '000' + binary;
            } else if (4 - binary.length === 4) {
                binary = '0000' + binary;
            }

            result = binary + ' ' + result;
        }
    }
    console.log('binary -> ' + result);

}

solve('B7F6');//decimal -> 47094
solve('1F4');//decimal -> 500
solve('A2E3F');//binary -> 1010 0010 1110 0011 1111
solve('2');//binary -> 0010 

