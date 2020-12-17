function solve(input) {
    input.pop();
    let heroes = {};

    for (let line of input) {
        let [command, name, index] = line.split(' ');

        if (command === 'Enroll') {
            enroll(name);
        } else if (command === 'Learn') {
            learn(name, index);
        } else if (command === 'Unlearn') {
            unlearn(name, index);
        }
    }

    function enroll(heroName) {
        if (!heroes.hasOwnProperty(heroName)) {
            heroes[heroName] = [];
        } else {
            console.log(`${heroName} is already enrolled.`);
        }
    }

    function learn(heroName, spellName) {
        if (heroes.hasOwnProperty(heroName)) {

            if (!heroes[heroName].includes(spellName)) {
                heroes[heroName].push(spellName);
            } else {
                console.log(`${heroName} has already learnt ${spellName}.`);
            }
        } else {
            console.log(`${heroName} doesn't exist.`);
        }
    }

    function unlearn(heroName, spellName) {
        if (heroes.hasOwnProperty(heroName)) {
            if (heroes[heroName].includes(spellName)) {
                let exsitingSpell = heroes[heroName].indexOf(spellName);
                heroes[heroName].splice(exsitingSpell, 1);
            } else {
                console.log(`${heroName} doesn't know ${spellName}.`)
            }
        } else {
            console.log(`${heroName} doesn't exist.`)
        }
    }

    let sortedHeroes = Object.entries(heroes)
        .sort(sorted);
        
    console.log('Heroes:');

    for (let [heroName, arr] of sortedHeroes) {
        console.log(`== ${heroName}: ${arr.join(', ')}`);
    }

    function sorted(h1, h2) {
        let [heroName1, spell1] = h1;
        let [heroName2, spell2] = h2;

        let firstCriteria = spell2.length - spell1.length;

        if (firstCriteria === 0) {
            return heroName1.localeCompare(heroName2);
        }

        return firstCriteria;
    }
}

solve(
    ['Enroll Stefan',
        'Enroll Pesho',
        'Enroll Stefan',
        'Learn Stefan ItShouldWork',
        'Learn Stefan Work',
        'Learn Stefan BWork',
      
        'Learn Pesho Work',
        'Learn Pesho BWork',
        'Learn Stamat ItShouldNotWork',
        'Unlearn Gosho Dispel',
        'Unlearn Stefan ItShouldWork',
        'End']

    // [   'Enroll Stefan',
    //     'Learn Stefan ItShouldWork',
    //     'Learn Stefan ItShouldWork',
    //     'Unlearn Stefan NotFound',
    //     'End' ]
)