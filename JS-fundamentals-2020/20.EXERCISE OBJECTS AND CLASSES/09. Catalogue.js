function solve(input) {
    let obj = {};
    for (let line of input) {
        let [product, price] = line.split(' : ');

        let groups = product[0];

        if (!obj.hasOwnProperty(groups)) {
            obj[groups] = [];
        }

        obj[groups].push(`${product}: ${price}`)
    }

    let firstSorted = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]))

    for (let [group, items] of firstSorted) {

        let secondSort = items.sort((a, b) => a.localeCompare(b))
        console.log(group);
        for (let product of secondSort) {
            console.log(`  ${product}`);
        }
    }
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])