function solve(input) {
    let n = Number(input.shift());
    let heroes = {};

    for (let i = 0; i < n; i++) {
        let [name, hp, mp] = input.shift().split(' ');
        heroes[name] = { hp: Number(hp), mp: Number(mp) };
    }

    let actions = {
        CastSpell: (name, mpNeeded, spellName) => {
            mpNeeded = Number(mpNeeded);
            let hero = heroes[name];

            if (hero.mp >= mpNeeded) {
                hero.mp -= mpNeeded;
                console.log(`${name} has successfully cast ${spellName} and now has ${hero.mp} MP!`);
            } else {
                console.log(`${name} does not have enough MP to cast ${spellName}!`);
            }
        },
        TakeDamage: (name, damage, attacker) => {
            damage = Number(damage);
            let hero = heroes[name];
            hero.hp -= damage;

            if (hero.hp > 0) {
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${hero.hp} HP left!`);
            } else {
                console.log(`${name} has been killed by ${attacker}!`);
            }
        },
        Recharge: (name, mana) => {
            mana = Number(mana);
            let extMana = heroes[name];
            if (extMana.mp + mana > 200) {
                mana = 200 - extMana.mp;
            }

            extMana.mp += mana;
            console.log(`${name} recharged for ${mana} MP!`);
        },
        Heal: (name, heil) => {
            heil = Number(heil);
            let extHeil = heroes[name];
            if (extHeil.hp + heil > 100) {
                heil = 100 - extHeil.hp;
            }

            extHeil.hp += heil;
            console.log(`${name} healed for ${heil} HP!`);
        }
    }

    let line = input.shift();
    while (line !== 'End') {
        let [command, name, arg1, arg2] = line.split(' - ');
        actions[command](name, arg1, arg2);
        line = input.shift();
    }

    let sorted = Object.entries(heroes).filter(([name, {hp, mp}]) => hp > 0).sort(compareHeroes);

    function compareHeroes(a, b) {
        let heroA = a[1];
        let heroB = b[1];

        let firstCriteria = heroB.hp - heroA.hp;
        if (firstCriteria === 0) {
            return a[0].localeCompare(b[0])
        }

        return firstCriteria;
    }

    for (let hero of sorted) {
        console.log(`${hero[0]}`);
        console.log(`  HP: ${hero[1].hp}`);
        console.log(`  MP: ${hero[1].mp}`);
    }
}

solve(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'])
console.log('----------------------');
solve(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'])