function solve(input) {
    let pattern = /%(?<name>[A-Z][a-z]+)%([^\|\$\%\.]+)?<(?<prod>[\w]+)>([^\|\$\%\.]+)?\|(?<qnt>[\d]+)\|([^\|\$\%\.\d]+)?(?<price>\d+(\.[\d]+)?)\$/;
    let line = input.shift();
    let totalSum = 0;
    while (line !== 'end of shift') {

        let matches = pattern.exec(line)
        if (matches !== null) {

            console.log(`${matches.groups.name}: ${matches.groups.prod} - ${(Number(matches.groups.qnt) * Number(matches.groups.price)).toFixed(2)}`);
            totalSum += Number(matches.groups.qnt) * Number(matches.groups.price);
        }

        line = input.shift();
    }
    console.log(`Total income: ${totalSum.toFixed(2)}`);
}

solve(['%George%<Croissant>|2|10.3$', '%Peter%<Gum>|1|1.3$', '%Maria%<Cola>|1|2.4$', 'end of shift'])

//solve(['%InvalidName%<Croissant>|2|10.3$', '%Peter%<Gum>1.3$', '%Maria%<Cola>|1|2.4', '%Valid%<Valid>valid|10|valid20$', 'end of shift'])