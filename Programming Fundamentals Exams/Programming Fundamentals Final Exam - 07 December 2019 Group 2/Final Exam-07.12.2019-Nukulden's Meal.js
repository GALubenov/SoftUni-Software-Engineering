function solve(input) {
    let allGuests = {};
    let counter = 0;

    for (let line of input) {
        if (line === 'Stop') {
            break;
        }

        let [command, guest, meal] = line.split('-');

        if (command === 'Like') {
            like(guest, meal);
        } else {
            unlike(guest, meal);
        }
    }
    let sortedGuest = Object.entries(allGuests)
        .sort(sorted);

    for (let [guest, meal] of sortedGuest) {
        console.log(`${guest}: ${meal.join(', ')}`);
    }

    function sorted(g1, g2) {
        let [aName, aMeal] = g1;
        let [bName, bMeal] = g2;

        let firstCriteria = bMeal.length - aMeal.length;
        if (firstCriteria === 0) {
            return aName.localeCompare(bName)
        }

        return firstCriteria;
    }

    console.log(`Unliked meals: ${counter}`);
    
    function like(guest, meal) {
        if (!allGuests.hasOwnProperty(guest)) {
            allGuests[guest] = [];
        }

        let likedMeal = allGuests[guest];
        if (!likedMeal.includes(meal)) {
            likedMeal.push(meal);
        }
    }

    function unlike(guest, meal) {
        if (!allGuests.hasOwnProperty(guest)) {
            console.log(`${guest} is not at the party.`)
        } else {
            let unlikedMeal = allGuests[guest];
            if (unlikedMeal.includes(meal)) {
                let indexOfMeal = unlikedMeal.indexOf(meal);
                unlikedMeal.splice(indexOfMeal, 1);
                console.log(`${guest} doesn't like the ${meal}.`);
                counter++;
            } else {
                console.log(`${guest} doesn't have the ${meal} in his/her collection.`)
            }
        }
    }
}

solve(
    [
        'Like-Krisi-shrimps',
        'Unlike-Vili-carp',
        'Unlike-Krisi-salad',
        'Unlike-Krisi-shrimps',
        'Stop'
    ]
)