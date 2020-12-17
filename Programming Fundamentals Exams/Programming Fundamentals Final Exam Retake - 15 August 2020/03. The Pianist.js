function solve(input) {
    let num = Number(input[0]);
    let indexOfStop = input.indexOf('Stop');
    let commandLine = input.slice(num + 1, indexOfStop);

    let obj = {};

    for (let i = 1; i <= num; i++) {
        let [piece, composer, key] = input[i].split('|');
        obj[piece] = { composer, key };
    }

    for (let line of commandLine) {
        let [command, piece, firstArg, secondArg] = line.split('|');

        if (command === 'Add') {
            add(piece, firstArg, secondArg);
        } else if (command === 'Remove') {
            remove(piece);
        } else if (command === 'ChangeKey') {
            change(piece, firstArg);
        }
    }

    let entries = Object.entries(obj);
    let sorted = entries.sort((a, b) => {
        return a[0].localeCompare(b[0]);
    });

    for (let kvp of sorted) {
        console.log(`${kvp[0]} -> Composer: ${kvp[1].composer}, Key: ${kvp[1].key}`);
    }

    function add(piece, composer, key) {
        if (!obj.hasOwnProperty(piece)) {
            obj[piece] = { composer, key };
            console.log(`${piece} by ${composer} in ${key} added to the collection!`);
        } else {
            console.log(`${piece} is already in the collection!`);
        }
    }

    function remove(piece) {
        if (obj.hasOwnProperty(piece)) {
            delete obj[piece];
            console.log(`Successfully removed ${piece}!`);
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }

    function change(piece, newKey) {
        if (obj.hasOwnProperty(piece)) {
            obj[piece].key = newKey;
            console.log(`Changed the key of ${piece} to ${newKey}!`);
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }
}

solve(
  //  ['3', 'Fur Elise|Beethoven|A Minor', 'Moonlight Sonata|Beethoven|C# Minor', 'Clair de Lune|Debussy|C# Minor', 'Add|Sonata No.2|Chopin|B Minor', 'Add|Hungarian Rhapsody No.2|Liszt|C# Minor', 'Add|Fur Elise|Beethoven|C# Minor', 'Remove|Clair de Lune', 'ChangeKey|Moonlight Sonata|C# Major', 'Stop']
  [
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]
  


)