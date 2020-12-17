function solve(input) {
    input.shift();
    let pattern = /@#{1,}[A-Z][A-Za-z0-9]{4,}[A-Z]@#{1,}/g;

    for (let line of input) {
        let matches = [...line.matchAll(pattern)][0];
        
        if (matches) {
            let barcode = matches[0]
            let product = [];

            for (let i = 0; i < barcode.length; i++) {
                let num = Number(barcode[i]);

                if (num >= 0 && num <= 9) {
                    product.push(num);
                }
            }
          
            if (product.length === 0) {
                console.log(`Product group: 00`)
          
            } else {
                console.log(`Product group: ${product.join('')}`)
            }

        } else {
            console.log('Invalid barcode')
        }
    }
}

solve(
    [
        '6',
        '@###Val1d1teM@###',
        '@#ValidIteM@#',
        '##InvaliDiteM##',
        '@InvalidIteM@',
        '@#Invalid_IteM@#',
        '@#ValiditeM@#'
      ]
)