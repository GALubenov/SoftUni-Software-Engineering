function solve(input) {
    input.pop();
    let obj = {};
    let num = input.shift();

    for (let i = 0; i < +num; i++) {
        let line = input.shift();
        let [name, healthPont, mapaPoint] = line.split(' ');
        obj[name] = [healthPont, mapaPoint];

    }

    for (let line of input) {
        let [command, heroName, points, attacker] = line.split(' - ')
        points = Number(points);
        if (command === 'CastSpell') {
            castSpell(heroName, points, attacker);
        } else if (command === 'TakeDamage') {
            takeDamage(heroName, points, attacker);
        } else if (command === 'Recharge') {
            recharge(heroName, points);
        } else if (command === 'Heal') {
            heal(heroName, points);
        }
    }

    function heal(heroName, amount) {
        if (obj.hasOwnProperty(heroName)) {
            let currentHP = Number(obj[heroName][0]);

            if (currentHP > 0 && currentHP <= 100) {
                let neededHP = 100 - currentHP;

                if (amount <= neededHP) {
                    currentHP += amount;
                    obj[heroName][0] = currentHP;
                    console.log(`${heroName} healed for ${amount} HP!`);

                } else if (amount > neededHP) {
                    currentHP = 100;
                    obj[heroName][0] = currentHP;
                    console.log(`${heroName} healed for ${neededHP} HP!`);
                }
            }
        }
    }

    function recharge(heroName, amount) {
        if (obj.hasOwnProperty(heroName)) {
            let existingMP = Number(obj[heroName][1]);
            if (existingMP >= 0 && existingMP <= 200) {
                let neededMP = 200 - existingMP;

                if (amount <= neededMP) {
                    existingMP += amount;
                    obj[heroName][1] = existingMP;
                    console.log(`${heroName} recharged for ${amount} MP!`);
                } else if (amount > neededMP) {
                    existingMP = 200;
                    obj[heroName][1] = existingMP;
                    console.log(`${heroName} recharged for ${neededMP} MP!`);
                }
            }
        }
    }

    function castSpell(heroName, mpNeeded, spellName) {
        if (obj.hasOwnProperty(heroName)) {
            let existingManaPoints = Number(obj[heroName][1]);

            if (existingManaPoints >= mpNeeded) {
                existingManaPoints -= mpNeeded;
                console.log(`${heroName} has successfully cast ${spellName} and now has ${existingManaPoints} MP!`)
                obj[heroName][1] = existingManaPoints;
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
            }
        }
    }

    function takeDamage(heroName, damage, attacker) {
        let existingHealthPoints = Number(obj[heroName][0]);
        existingHealthPoints -= damage;

        if (existingHealthPoints > 0) {
            console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${existingHealthPoints} HP left!`);
            obj[heroName][0] = existingHealthPoints;
        } else if (existingHealthPoints <= 0) {
            console.log(`${heroName} has been killed by ${attacker}!`);
            delete obj[heroName];
        }
    }

    let alivedHeroes = Object.entries(obj)
        .sort(sorted);

    for (let [hero, points] of alivedHeroes) {
        console.log(`${hero}\n  HP: ${points[0]}\n  MP: ${points[1]}`);
    }

    function sorted(h1, h2) {
        let [nameHero1, pointsHero1] = h1;
        let [nameHero2, pointsHero2] = h2;

        let firstCriteria = +pointsHero2[0] - +pointsHero1[0];
        if (firstCriteria === 0) {
            return nameHero1.localeCompare(nameHero2)
        }

        return firstCriteria;
    }
}


solve([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
])