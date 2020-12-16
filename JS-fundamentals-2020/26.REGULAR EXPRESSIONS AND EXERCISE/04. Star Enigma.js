function solve(input) {
    let num = Number(input.shift());
    let regex = /@(?<name>[A-Za-z]+)([^@\-!:>]+)?:(?<popul>[\d]+)([^@\-!:>]+)?!(?<attack>[A,D])!([^@\-!:>]+)?->(?<soldier>[\d]+)/;
    let patternForKey = /[S,T,A,R,s,t,a,r]/g;
    let attackedPlanet = [];
    let destroyedPlanet = [];

    for (let i = 0; i < num; i++) {
        let message = input.shift();
        let key = message.match(patternForKey).length;
        let decrtypt = message.split('').map(el => el.charCodeAt() - key).map(el => String.fromCharCode(el)).join('');

        let matches = regex.exec(decrtypt);
        if (matches !== null) {
            let name = matches.groups.name;
            let population = matches.groups.popul;
            let attack = matches.groups.attack;
            let soldier = matches.groups.soldier;

            if (attack === 'A') {
                attackedPlanet.push(name);
            } else if (attack === 'D') {
                destroyedPlanet.push(name);
            }
            //console.log(`${name} - ${population} - ${attack} - ${soldier}`)
        }
    }

    attackedPlanet.sort((a, b) => a.localeCompare(b));
    destroyedPlanet.sort((a, b) => a.localeCompare(b));
    console.log(`Attacked planets: ${attackedPlanet.length}`);
    for (let planet of attackedPlanet) {
        console.log(`-> ${planet}`);
    }

    console.log(`Destroyed planets: ${destroyedPlanet.length}`);
    for (let planet of destroyedPlanet) {
        console.log(`-> ${planet}`);
    }
}

solve(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR',
    'Inpu'])
   solve(['3',
    'tt(''DGsvywgerx>6444444444%H%1B9444',
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
   ])