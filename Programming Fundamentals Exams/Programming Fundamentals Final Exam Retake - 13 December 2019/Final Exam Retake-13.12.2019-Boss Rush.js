function solve(input) {
    input.shift();

    let pattern1 = /\|[A-Z]{4,}\|/g
    let pattern2 = /#[a-zA-Z]+\s[a-zA-Z]+#/g
    
    for (let line of input) {
        let [name, title] = line.split(':');

        if (name.match(pattern1) && title.match(pattern2)) {
            name = name.split('|');
            title = title.split('#')
            console.log(`${name[1]}, The ${title[1]}\n>> Strength: ${name[1].length}\n>> Armour: ${title[1].length}`)

        } else {
            console.log("Access denied!")
        }
    }
}

solve(
    ['3',
        '|GEORGI|:#Lead architect#',
        '|Hristo|:#High Overseer#',
        '|STEFAN|:#Assistant Game Developer#']

    // [        '3',
    // '|PETER|:#H1gh Overseer#',
    // '|IVAN|:#Master detective#',
    // '|KARL|: #Marketing lead#']
)

function self(input) {
    input.shift();
    let patt = /\|[A-Z]{4,}\|:#[a-zA-Z]+\s[a-zA-Z]+#/g;
    for (let line of input) {
        if (line.match(patt)) {
            let [name, title]  = line.split(':');
            name = name.split('|');
            title = title.split('#');
            console.log(`${name[1]}, The ${title[1]}\n>> Strength: ${name[1].length}\n>> Armour: ${title[1].length}`);
        } else {
            console.log("Access denied!")
        }
    }
}

self(
    ['3',
        '|GEORGI|:#Lead architect#',
        '|Hristo|:#High Overseer#',
        '|STEFAN|:#Assistant Game Developer#']

    // [        '3',
    // '|PETER|:#H1gh Overseer#',
    // '|IVAN|:#Master detective#',
    // '|KARL|: #Marketing lead#']
)