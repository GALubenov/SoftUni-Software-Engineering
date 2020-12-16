function solve(input) {
    let cardMapper = {
        p: {
            J: 11,
            Q: 12,
            K: 13,
            A: 14
        },
        t: {
            S: 4,
            H: 3,
            D: 2,
            C: 1
        }
    }

    let deck = generateDeck(input);

    Object.keys(deck).forEach(x => {
        console.log(`${x}: ${totalPower(deck[x])}`);
    })

    function totalPower(arr) {
        let sum = 0;

        for (let card of arr) {
            let tokens = card.split('');
            let value = tokens.slice(0, tokens.length - 1).join('');
            let suit = tokens.slice(-1).join('');

            let p = 0;
            let t = 0;

            if (!cardMapper.p[value]) {
                p = Number(value);
            } else {
                p = cardMapper.p[value];
            }

            sum += p * cardMapper.t[suit];
        }
        return sum;
    }

    function generateDeck(input) {
        let obj = {};
        for (let line of input) {
            let [name, card] = line.split(': ');
            let type = card.split(', ');
            if (!obj.hasOwnProperty(name)) {
                obj[name] = new Set(type);
            } else {
                type.forEach(x => obj[name].add(x));
            }
            /*  или вместо else може по този начин да се променя обекта чрез референция 
           let existing = obj[name];
           for (let el of type) {
               existing.add(el);
           }
           */
        }
        return obj;
    }
}

solve(['Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])

