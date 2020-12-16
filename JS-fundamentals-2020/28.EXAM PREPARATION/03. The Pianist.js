function solve(input) {
    let obj = {};
    let n = Number(input.shift());
    input.splice(0, n).reduce((acc, v) => {
        let [piece, composer, key] = v.split('|');
        return obj[piece] = { Composer: composer, Key: key };
    }, 0)

    let actions = {
        Add: (piece, composer, key) => {
            if (!obj.hasOwnProperty(piece)) {
                obj[piece] = { Composer: composer, Key: key }
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            } else {
                console.log(`${piece} is already in the collection!`);
            }
        },
        Remove: (piece) => {
            if (obj.hasOwnProperty(piece)) {
                console.log(`Successfully removed ${piece}!`);
                delete obj[piece];
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        },
        ChangeKey: (piece, newKey) => {
            if (obj.hasOwnProperty(piece)) {
                console.log(`Changed the key of ${piece} to ${newKey}!`);
                obj[piece].Key = newKey;
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }

    let line = input.shift();
    while (line != 'Stop') {
        let [command, song, name, args] = line.split('|');
        actions[command](song, name, args);
        line = input.shift();
    }


    let entries = Object.keys(obj).sort((a, b) => {
        let firstCriteria = a.localeCompare(b);
        return firstCriteria
    });

    for (let name of entries) {
        console.log(`${name} -> Composer: ${obj[name].Composer}, Key: ${obj[name].Key}`)
    }
}

//solve(['3', 'Fur Elise|Beethoven|A Minor', 'Moonlight Sonata|Beethoven|C# Minor', 'Clair de Lune|Debussy|C# Minor', 'Add|Sonata No.2|Chopin|B Minor', 'Add|Hungarian Rhapsody No.2|Liszt|C# Minor', 'Add|Fur Elise|Beethoven|C# Minor', 'Remove|Clair de Lune', 'ChangeKey|Moonlight Sonata|C# Major', 'Stop'])

solve(['4', 'Eine kleine Nachtmusik|Mozart|G Major', 'La Campanella|Liszt|G# Minor', 'The Marriage of Figaro|Mozart|G Major', 'Hungarian Dance No.5|Brahms|G Minor', 'Add|Spring|Vivaldi|E Major', 'Remove|The Marriage of Figaro', 'Remove|Turkish March', 'ChangeKey|Spring|C Major', 'Add|Nocturne|Chopin|C# Minor', 'Stop'])