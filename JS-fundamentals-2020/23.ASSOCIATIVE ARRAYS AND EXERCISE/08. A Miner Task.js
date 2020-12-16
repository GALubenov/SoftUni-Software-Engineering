function solve(input) {

    let map = new Map();

    for (let i = 0; i < input.length; i += 2) {
        let item = input[i];
        let qty = Number(input[i + 1]);

        if (map.has(item)) {
            let existingQty = map.get(item);
            map.set(item, existingQty + qty);
        } else {
            map.set(item, qty);
        }
    }

    for (let [item, qty] of Array.from(map)) {
        console.log(`${item} -> ${qty}`);
    }
}

solve(['Gold', '155', 'Silver', '10', 'Copper', '17'])
//solve(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15'])