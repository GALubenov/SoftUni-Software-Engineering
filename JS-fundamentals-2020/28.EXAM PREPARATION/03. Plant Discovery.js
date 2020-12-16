function solve(input) {
    let obj = {};
    let n = Number(input.shift());
    for (let i = 0; i < n; i++) {
        let [plant, rarity] = input.shift().split('<->');
        rarity = Number(rarity);
        if (!obj.hasOwnProperty(plant)) {
            obj[plant] = { Rarity: rarity, Rate: [] }
        } else {
            obj[plant] = { Rarity: rarity }
        }
    }

    let actions = {
        Rate: (plant, rating) => {
           // if (obj.hasOwnProperty(plant)) {
                obj[plant].Rate.push(rating);
           // }
        },
        Update: (plant, newRarity) => {
            obj[plant].Rarity = Number(newRarity);
        },
        Reset: (plant) => {
            obj[plant].Rate = [];
        }
    }

    let line = input.shift();
    while (line != 'Exhibition') {
        let [command, tokens] = line.split(': ')
        let plant = '';
        let rating = 0; 
        if (tokens.includes('-')) {
            let [args1, args2] = tokens.split(' - ');
            plant = args1;
            rating = Number(args2);
        } else {
            plant = tokens;
        }

        if (command === 'Rate' || command === 'Update' || command === 'Reset') {
            rating = Number(rating);
            actions[command](plant, rating);
        } else {
            return console.log('error');
        }

        line = input.shift();
    }

    for (let key of Object.keys(obj)) {
       let arr = obj[key].Rate;
        if (arr.length > 0) {
            obj[key].Rate = calculateRating(arr);
        } else {
            obj[key].Rate = 0;
        }
    }

    let sorted = Object.keys(obj).sort((a, b) => {
        let firstCriteria = obj[b].Rarity - obj[a].Rarity;
        if (firstCriteria === 0) {
            return obj[b].Rate - obj[a].Rate;
        }
        return firstCriteria;
    });

    console.log('Plants for the exhibition:');
    for (let plant of sorted) {
        console.log(`- ${plant}; Rarity: ${obj[plant].Rarity}; Rating: ${(obj[plant].Rate).toFixed(2)}`);
    }

    function calculateRating(arr) {
        let result = 0;
        for (let i = 0; i < arr.length; i++) {
            result += Number(arr[i]);
        }

        return result / arr.length;
    }
}

//solve(['3', 'Arnoldii<->4', 'Woodii<->7', 'Welwitschia<->2',    'Rate: Woodii - 10', 'Rate: Welwitschia - 7', 'Rate: Arnoldii - 3', 'Rate: Woodii - 5', 'Update: Woodii - 5', 'Reset: Arnoldii', 'Exhibition'])
//solve(['2', 'Candelabra<->10', 'Oahu<->10',    'Rate: Oahu - 7', 'Rate: Candelabra - 6', 'Exhibition'])
solve(['2', 'Candelabra<->100', 'Oahu<->10',
    'Rate: Oahu - 177', 'Rate: Candelabra - 6', 'Reset: Oahu', 'Exhibition'])
