function solve(input) {
    let n = Number(input.shift());
    let obj = {};
    for (let i = 0; i < n; i++) {
        let [name, health, mana] = input.shift().split(' ');
        obj[name] = { Health: Number(health), Mana: Number(mana) };
    }

    let actions = {
        CastSpell: (name, neededMana, spellName) => {
            neededMana = Number(neededMana);
            if (obj[name].Mana >= neededMana) {
                obj[name].Mana -= neededMana;
                console.log(`${name} has successfully cast ${spellName} and now has ${obj[name].Mana} MP!`);
            } else {
                console.log(`${name} does not have enough MP to cast ${spellName}!`);
            }
        },
        TakeDamage: (name, damage, attacker) => {
            damage = Number(damage);
            obj[name].Health -= damage;
            if (obj[name].Health > 0) {
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${obj[name].Health} HP left!`);
            } else {
                console.log(`${name} has been killed by ${attacker}!`);
                delete obj[name];
            }
        },
        Recharge: (name, amount) => {
            amount = Number(amount);
            let extMana = obj[name].Mana;
            if (extMana + amount > 200) {
                amount = 200 - extMana;
            }
            obj[name].Mana += amount;
            console.log(`${name} recharged for ${amount} MP!`);
        },
        Heal: (name, amount) => {
            amount = Number(amount);
            let extHealth = obj[name].Health;
            if (extHealth + amount > 100) {
                amount = 100 - extHealth;
            }
            obj[name].Health += amount;
            console.log(`${name} healed for ${amount} HP!`);
        }

    }

    let line = input.shift();
    while (line != 'End') {
        let [command, name, args1, args2] = line.split(' - ');
        actions[command](name, args1, args2);
        line = input.shift();
    }

    let sorted = Object.keys(obj).sort((a, b) => {
        let firstCriteria = obj[b].Health - obj[a].Health;
        if (firstCriteria === 0) {
            return a.localeCompare(b);
        }
        return firstCriteria;
    })

    for (let name of sorted) {
        console.log(name);
        console.log(`  HP: ${obj[name].Health}\n  MP: ${obj[name].Mana}`);
    }
}

solve(['2', 'Solmyr 85 120', 'Kyrre 99 50', 'Heal - Solmyr - 10', 'Recharge - Solmyr - 50', 'TakeDamage - Kyrre - 66 - Orc', 'CastSpell - Kyrre - 15 - ViewEarth', 'End'])


solve(['4', 'Adela 90 150', 'SirMullich 70 40', 'Ivor 1 111', 'Tyris 94 61', 'Heal - SirMullich - 50', 'Recharge - Adela - 100', 'CastSpell - Tyris - 1000 - Fireball', 'TakeDamage - Tyris - 99 - Fireball', 'TakeDamage - Ivor - 3 - Mosquito', 'End'])