function solve(input) {

    let heroes = [];

    for (let line of input) {

        let [name, level, items] = line.split(' / ');
        level = Number(level);
        let item = items.split(', ').sort((a, b) => a.localeCompare(b));

        heroes.push({ Hero: name, level: level, items: item })
    }

    let sorted = heroes.sort((a, b) => {
        return Object.values(a)[1] - Object.values(b)[1];
    })

    for (let obj of sorted) {
        console.log(`Hero: ${obj.Hero}`);
        console.log(`level => ${obj.level}`);
        console.log(`items => ${obj.items.join(', ')}`);
    }
}

solve(["Isacc / 25 / Apple, GravityGun", "Derek / 12 / BarrelVest, DestructionSword", "Hes / 1 / Desolator, Sentinel, Antara"])