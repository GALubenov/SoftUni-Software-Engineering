function solve(input) {
    let n = Number(input.shift());
 //   let regex = /(@#+)(?<name>[A-Z][A-Za-z0-9]{4,}[A-Z])\1/;
    let pattern = /@#{1,}(?<name>[A-Z][A-Za-z0-9]{4,}[A-Z])@#{1,}/;

    let line = input.shift();
    for (let i = 0; i < n; i++) {
        let match = line.match(pattern);
       // console.log(match)

        if (match != null) {
            let product = match.groups.name;
            let arr = [];
            for (let i = 0; i < product.length; i++) {
                let num = Number(product[i]);
                if (num >= 0 && num <= 9) {
                    arr.push(num);
                }
            }

            if (arr.length > 0) {
                console.log(`Product group: ${arr.join('')}`);
            } else {
                console.log(`Product group: 00`);
            }
        } else {
            console.log("Invalid barcode");
        }

        line = input.shift();
    }
}

//solve(['3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che4s6E@##'])
solve(['6', '@###Val1d1teM@###', '@#ValidIteM@#', '##InvaliDiteM##', '@InvalidIteM@', '@#Invalid_IteM@#', '@#ValiditeM@#'])