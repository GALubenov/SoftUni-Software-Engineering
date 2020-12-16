
function getLastBit(n) {

    let digit = Number(n);
    let result = '';
    while (digit > 0) {
        let reminder = digit % 2;
               result = reminder + result;
               digit = digit / 2;
        digit = Math.floor(digit);
    }

    if (8 - result.length === 1) {
        result = '0' + result
    }
    
    //needed to get last bit
    console.log(result)


}


getLastBit(125)



