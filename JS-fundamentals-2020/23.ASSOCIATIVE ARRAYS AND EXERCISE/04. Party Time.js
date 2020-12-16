function solve(input) {
    let index = input.indexOf('PARTY');
    let listGuests = input.slice(0, index);
    let comingGuests = input.slice(index + 1);

    for (let line of comingGuests) {
        if (listGuests.includes(line)) {
            let index = listGuests.indexOf(line);

            listGuests.splice(index, 1);
        }
    }

    let vip = [];
    let regular = [];

    for (let guest of listGuests) {
        if (!isNaN(Number(guest[0]))) {
            vip.push(guest);
        } else {
            regular.push(guest);
        }
    }

    let lostGuest = vip.concat(regular);
    console.log(lostGuest.length);
    console.log(lostGuest.join('\n'));
}

solve(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]

)