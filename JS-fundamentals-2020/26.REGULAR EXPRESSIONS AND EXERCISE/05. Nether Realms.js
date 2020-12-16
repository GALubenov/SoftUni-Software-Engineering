function solve(input) { //30 points in judge
    let obj = {};

    let arr = input[0].split(/[,\s]+/);
    for (let line of arr) {
        let damageDemons = damage(line);
        let healthDemons = health(line);

        obj[line] = { Health: healthDemons, Damage: damageDemons };
    }

    let entries = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));
    for(let arr of entries) {
        console.log(`${arr[0]} - ${arr[1].Health} health, ${(arr[1].Damage).toFixed(2)} damage`);
    }

    function health(line) {
        let pattern = /([^\+\-\*\/\.\s\d])/g;
        return line.match(pattern).map(el => el.charCodeAt()).reduce((acc, v) => {return acc + v}, 0);
    }

    function damage(line) {
        let floatPatt = /([-+]?[0-9].[0-9])/g;
        let digitPatt = /(?<float>(([-+])?[0-9].[0-9]))?(?<int>([0-9]))?/g;
        let multyOrDividePatt = /([*\/])/g;
        let digitDamage = line.match(digitPatt).filter(el => el !== '').map(Number).reduce((acc, v) => { return acc += v; }, 0);
        let matchArr = line.match(multyOrDividePatt);
        if (matchArr != null) {
            for (let symbol of matchArr) {
                if (symbol === '*') {
                    digitDamage = digitDamage * 2;
                }
                else if (symbol === '/') {
                    digitDamage = digitDamage / 2;
                }
            }
        }
        return digitDamage;
    }
}

//solve(['M3ph-0.5s-0.5t0.0**'])
solve(['M3ph1st0**,    Azazel, M3ph-0.5s-0.5t0.0**'])
//solve(['Gos/ho,    HoHo'])
