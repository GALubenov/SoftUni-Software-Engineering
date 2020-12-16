let arr = ['1', 2, 3, 4, 5].reduce((acc, c) => {
    return acc += Number(c)
}, 0)

function solve(input) {
    let map = new Map();

    for (let line of input) {
        let [garageNum, tokens] = line.split(' - ');
        //  tokens = tokens.split(', ');
        if (!map.has(garageNum)) {
            map.set(garageNum, new Set());
        }
        let ext = map.get(garageNum);
        ext.add(tokens);
    }

    let entries = Array.from(map.entries()).sort((a, b) => a[0][0] - b[0][0]);

    for (let line of entries) {
        console.log(`Garage № ${line[0]}`);

        for (let cars of line[1]) {
            let item = cars.split(', ')

            for (let i = 0; i < item.length; i++) {
                let str = item[i].split(': ').join(' - ');
                item[i] = str;
            }
            console.log(`--- ${item.join(', ')}`);
        }
    }
}

solve(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat',
    '2 - fuel type: petrol',])