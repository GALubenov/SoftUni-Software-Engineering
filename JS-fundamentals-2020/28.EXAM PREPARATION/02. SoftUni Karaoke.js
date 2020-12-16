function solve(input) {
    let participants = input.shift().split(', ');
    let playlist = input.shift().split(', ');
    let obj = {};

    let line = input.shift()
    while (line != 'dawn') {
        let [name, song, award] = line.split(', ');
        if (participants.includes(name) && playlist.includes(song)) {
            if (!obj.hasOwnProperty(name)) {
                obj[name] = new Set();
                obj[name].add(award);
            } else {
                obj[name].add(award);
            }
        }
        line = input.shift()
    }

    let entries = Object.keys(obj).sort((a, b) => {
        let firstCriteria = Array.from(obj[b]).length - Array.from(obj[a]).length;
        if (firstCriteria === 0) {
            return a.localeCompare(b);
        }
        return firstCriteria;
    })

    if (entries.length > 0) {
        for (let name of entries) {
            let awards = Array.from(obj[name]).sort((a, b) => a.localeCompare(b));

            console.log(`${name}: ${awards.length} awards`);
            for (let award of awards) {
                console.log(`--${award}`);
            }
        }
    } else {
        console.log(`No awards`);
    }
}

//solve(['Trifon, Vankata, Gesha',    "Dragana - Kukavice, Bon Jovi - It's my life, Lorde - Royals","Gesha, Bon Jovi - It's my life, Best Rock",    'Vankata, Dragana - Kukavice, Best Srabsko','Vankata, Dragana - Kukavice, Best Srabsko',    'Vankata, Dragana - Kukavice, Stiga Tolko Srabsko','Vankata, PHP Web, Educational 101',    "Gesha, Lorde - Royals, Best",    'dawn'])

//solve(["Gesha", "Bon Jovi - It's my life", "Gesha, Bon Jovi - It's my life, Best Rock", "Vankata, Dragana - Kukavice, Best Srabsko", "Vankata, Dragana - Kukavice, Stiga Tolko Srabsko", "Vankata, PHP Web, Educational 101", "dawn"])

solve(['Sino', 'Vasko Naidenov - Nova Godina', 'dawn'])


