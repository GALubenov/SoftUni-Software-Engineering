function solve(input) {
    let nameFriends = input.shift().split(', ');
    let blacklistCount = 0;
    let lostCount = 0;

    for (let line of input) {
        let [command, index1, index2] = line.split(' ');
        if (command === 'Report') {
            break;
        } else if (command === 'Blacklist') {
            blacklist(index1);
        } else if (command === 'Error') {
            error(index1);
        } else if (command === 'Change') {
            change(index1, index2);
        }
    }

    function blacklist(name) {
        if (nameFriends.includes(name)) {
            let index = nameFriends.indexOf(name);
            nameFriends.splice(index, 1, 'Blacklisted');
            blacklistCount++;
            console.log(`${name} was blacklisted.`);
        } else {
            console.log(`${name} was not found.`);
        }
    }

    function error(index) {
        index = +index;
        let currentName = nameFriends[index];

        if (currentName !== 'Blacklisted' && currentName !== 'Lost') {
            nameFriends.splice(index, 1, 'Lost');
            lostCount++;
            console.log(`${currentName} was lost due to an error.`);
        }
    }

    function change(index, newName) {
        index = +index;

        if (index >= 0 && index < nameFriends.length) {
            let currentName = nameFriends[index];
            nameFriends.splice(index, 1, newName);
            console.log(`${currentName} changed his username to ${newName}.`);
        }
    }

    let name = '';
    for (let line of nameFriends) {
        name += `${line} `;
    }
    
    console.log(`Blacklisted names: ${blacklistCount}`);
    console.log(`Lost names: ${lostCount}`);
}

solve(
    [ 'Mike, John, Eddie',
        'Blacklist Mike',
        'Error 0',
        'Error 1',
        'Change 2 Mike123',
        'Report'
        ]
)