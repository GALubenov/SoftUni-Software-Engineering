function solve(input) { // 60 points in judge

    let obj = {};

    for (let line of input) {
        if (line.includes(':')) {
            let tokens = line.split(': ');
            addArmy(tokens);
        } else if (line.includes('+')) {
            let tokens = line.split(' + ');
            addCount(tokens[0], tokens[1]);
        } else {
            let tokens = line.split(' ');
            let command = tokens.pop();
            if (command === 'arrives') {
                addLeader(tokens);
            } else if (command === 'defeated') {
                removeLeader(tokens);
            }
        }
    }

    let sorted = Object.entries(obj).sort((a, b) => totalLeaderCount(b) - totalLeaderCount(a));

    for (let legion of sorted) {
        let name = legion[0];
        let totalCount = legion[1][1];
        console.log(`${name}: ${totalCount}`);

        let map = Array.from(legion[1][0]).sort((a, b) => b[0][1] - a[0][1]);
        
        for (let [army, count] of map) {
            console.log(`>>> ${army} - ${count}`);
        }
    }

    function totalLeaderCount(arr) {
        let sum = 0;
        let nameOfLeader = arr[0];
        Array.from(arr[1][0]).forEach(el => sum += el[1]);
        obj[nameOfLeader][1] = sum; 
        return sum;
    }

    function addCount(army, count) {
        let existing = Object.values(obj);
        count = Number(count);
        for (let [mapIn, currentCount] of existing) {

            if (mapIn.has(army)) {
                let oldCountInMap = mapIn.get(army);
                mapIn.set(army, oldCountInMap + count);
            }
        }
    }

    function addArmy(arr) {
        let name = arr[0];
        let [army, count] = arr[1].split(', ');
        count = Number(count);

        if (obj.hasOwnProperty(name)) {
            let existingMap = obj[name][0];

            existingMap.set(army, count);
        }
    }

    function addLeader(arr) {
        let name = arr.join(' ');
        obj[name] = [new Map(), 0];
    }

    function removeLeader(arr) {
        let name = arr.join(' ');
        if (obj.hasOwnProperty(name)) {
            delete obj[name];
        }
    }
}

solve(
    ['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000',
        'Findlay arrives', 'Findlay: Britox, 34540',
        'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500',
        'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302',
        'Rick Burr defeated', 'Porter: Retix, 3205']
)