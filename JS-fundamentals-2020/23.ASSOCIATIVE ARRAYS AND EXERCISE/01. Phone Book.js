function solve(input) {
    let map = new Map()

    for (let string of input) {
        let parts = string.split(' ');
        let name = parts[0];
        let phone = parts[1];

        map.set(name, phone)
    }

    for (let [name, phone] of map) {
        console.log(`${name} -> ${phone}`);
    }
}

solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)