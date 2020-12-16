function solve(input) {
    let elements = input.split(' ').map(el => el.toLowerCase());

    let map = generateMap(new Set(elements));

    elements.forEach(ele => {
        map.set(ele, map.get(ele) + 1);
    });

    let output = '';

    Array.from(map.entries()).forEach(kvp => {
        let [key, value] = kvp;
        if (Number(value) % 2 !== 0) {
            output += key + ' ';
        }
    });

    console.log(output)

    function generateMap(set) {
        let map = new Map();
        set.forEach(element => {
            map.set(element, 0);
        });

        return map;
    };
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')

function solve(input) {
    let map = new Map();
    let element = input.split(' ').map(x => x.toLowerCase());

    for (let line of element) {
        if (!map.has(line)) {
            map.set(line, []);
        }

        let extisting = map.get(line);
        extisting.push(1)
    }

    let result = [];
    let arr = Array.from(map);
    for (let el of arr) {
        if (el[1].length % 2 === 1) {
            result.push(el[0])
        }
    }

    console.log(result.join(' '))
}