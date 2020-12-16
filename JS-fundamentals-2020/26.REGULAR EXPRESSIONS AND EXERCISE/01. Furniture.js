function solve(input) {

    let furniture = [];
    let totalSum = 0;
    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>(\d+\.\d+)|(\d+))\!(?<qnt>\d+)/;

    let line = input.shift();
    while (line !== 'Purchase') {
        // let [args, qnt] = line.split('!');
        //  qnt = Number(qnt);

        let matches = line.match(pattern)
        if (matches !== null) {
            furniture.push(matches.groups.name);
            totalSum += Number(matches.groups.price) * Number(matches.groups.qnt);
        }

        line = input.shift();
    }

    console.log('Bought furniture:');
    console.log(`${furniture.join('\n')}`);
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}

solve(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', '>>TV<<300!5', '>>TV<<300!5', 'Purchase'])