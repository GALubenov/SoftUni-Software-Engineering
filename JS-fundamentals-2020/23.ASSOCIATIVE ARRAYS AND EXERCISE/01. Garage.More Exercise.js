function solve(input) {// 60 points in Judge
    let obj = {};

    for (let line of input) {
        let [garageNum, tokens] = line.split(' - ');
        tokens = tokens.split(', ');
               
        if (!obj.hasOwnProperty(garageNum)) {
           obj[garageNum] = [generateMap(tokens)];
        } else {
            let ext = obj[garageNum];
            ext.push(generateMap(tokens));
        }
    }

    let entries = Object.entries(obj).sort((a, b) => a[0][0] - b[0][0]);

    for (let [garage, maps] of entries) {
        console.log(`Garage № ${garage}`);

        let cars = Array.from(maps.values());
        for (let car of cars) {
           let result = [];

           Array.from(car.entries()).forEach(arr => {
            result.push(arr.join(' - '));
           })

           console.log(`--- ${result.join(', ')}`);
        }
    }

    function generateMap(arr) {
        let map = new Map();
            for (let line of arr) {
                let [key, value] = line.split(': ');
                map.set(key, value);
            }
       return map;
    }
}

solve(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])

    function secondSolve(input) { // 60 points in Judge
        let map = new Map();
    
        for (let line of input) {
            let [garageNum, tokens] = line.split(' - ');
            tokens = tokens.split(', ');
            if (!map.has(garageNum)) {
                map.set(garageNum, []);
            }
            let ext = map.get(garageNum);
            ext.push(tokens);
        }
    
        let entries = Array.from(map.entries()).sort((a, b) => a[0][0] - b[0][0]);
    
        for (let line of entries) {
            console.log(`Garage № ${line[0]}`);
    
            for (let cars of line[1]) {
                for (let i = 0; i < cars.length; i++) {
                    let item = cars[i].split(': ').join(' - ');
                    cars[i] = item;
                }
                 console.log(`--- ${cars.join(', ')}`);
            }
        }
    }

    function thirdSolve(input) {// 60 points in Judge
        let map = new Map();
    
        for (let line of input) {
            let [garageNum, tokens] = line.split(' - ');
            //  tokens = tokens.split(', ');
            if (!map.has(garageNum)) {
                map.set(garageNum, new Set());
            }
            let ext = map.get(garageNum);
            ext.add(tokens);
        }
    
        let entries = Array.from(map.entries()).sort((a, b) => a[0][0] - b[0][0]);
    
        for (let line of entries) {
            console.log(`Garage № ${line[0]}`);
    
            for (let cars of line[1]) {
                let item = cars.split(', ')
    
                for (let i = 0; i < item.length; i++) {
                    let str = item[i].split(': ').join(' - ');
                    item[i] = str;
                }
                console.log(`--- ${item.join(', ')}`);
            }
        }
    }