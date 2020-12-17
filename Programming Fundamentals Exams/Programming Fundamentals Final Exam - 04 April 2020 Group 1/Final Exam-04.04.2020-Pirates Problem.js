function solve(input) {
    input.pop()
    let obj = {};

    for (let i = 0; i < input.length; i++) {
        let [city, population, gold] = input[i].split('||');
        if (city === 'Sail') {
            break;
        } else if (!obj.hasOwnProperty(city)) {
            obj[city] = [population, gold];
        } else {
            let existingPopulation = obj[city][0];
            let existingGold = obj[city][1];
            obj[city][0] = Number(existingPopulation) + Number(population);
            obj[city][1] = Number(existingGold) + Number(gold);
        }
    }

    let indexSail = input.indexOf('Sail')
    for (let i = indexSail + 1; i < input.length; i++) {
        let [command, town, people, gold] = input[i].split('=>')
        people = +people;
        gold = +gold;

        if (command === 'Plunder') {
            plunder(town, people, gold);
        } else if (command === 'Prosper') {
            prosper(town, people);
        }
    }

    function plunder(town, people, gold) {
        let existingPeople = obj[town][0];
        let existingGold = obj[town][1];
        console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
        obj[town][0] = +existingPeople - people;
        obj[town][1] = +existingGold - gold;
        if (obj[town][0] <= 0 || obj[town][1] <= 0) {
            console.log(`${town} has been wiped off the map!`);
            delete obj[town];
        }
    }

    function prosper(town, gold) {
        let existingGold = obj[town][1];
        if (gold < 0) {
            console.log(`Gold added cannot be a negative number!`);
        } else {
            obj[town][1] = +existingGold + gold;
            let totalGold = obj[town][1];
            console.log(`${gold} gold added to the city treasury. ${town} now has ${+totalGold} gold.`);
        }
    }

    let settlements = Object.entries(obj)
    .sort(sorted);

    if (settlements.length > 0) {
        console.log(`Ahoy, Captain! There are ${settlements.length} wealthy settlements to go to:`);
    }
    for (let line of settlements) {
     console.log(`${line[0]} -> Population: ${line[1][0]} citizens, Gold: ${line[1][1]} kg`);   

    }

    function sorted(city1, city2) {
        let [town1, prop1] = city1;
        let [town2, prop2] = city2;

        let firstCriteria = +prop2[1] - +prop1[1];
        if (firstCriteria === 0) {
            return town1.localeCompare(town2);
        }
        return firstCriteria;
    }
}

solve([

`Nassau||95000||1000`,
`San Juan||930000||1250`,
`Campeche||270000||690`,
`Port Royal||320000||1000`,
`Port Royal||100000||2000`,
`Sail`,
`Prosper=>Port Royal=>-200`,
`Plunder=>Nassau=>94000=>750`,
`Plunder=>Nassau=>1000=>150`,
`Plunder=>Campeche=>150000=>690`,
`End`


   // 'Tortuga||345000||1250',
   // 'Santo Domingo||240000||630',
   // 'Havana||410000||1100',
   // 'Sail',
   // 'Plunder=>Tortuga=>75000=>380',
   // 'Prosper=>Santo Domingo=>180',
   // 'End'
]);

