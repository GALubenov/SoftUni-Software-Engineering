function solve(input) {
    let n = input.shift()
    n = +n;
    let cars = {};
    for (let i = 0; i < n; i++) {
        let a = input.shift();
        let [car, mileAge, fuel] = a.split('|');
        cars[car] = [+mileAge, +fuel];
    }

    for (let line of input) {
        let [command, cars, index1, index2] = line.split(' : ');
        if (command === 'Drive') {
            drive(cars, index1, index2);
        } else if (command === 'Refuel') {
            refuel(cars, index1);
        } else if (command === 'Revert') {
            revert(cars, index1);
        } else if (command === 'Stop') {
            break;
        }
    }

    function drive(car, distance, fuel) {
        distance = +distance;
        fuel = +fuel;
        let [exsistingMileAge, exsistingFuel] = cars[car];

        if (exsistingFuel >= fuel) {
            exsistingFuel -= fuel;
            exsistingMileAge += distance;
            cars[car] = [exsistingMileAge, exsistingFuel]
            console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

            if (exsistingMileAge >= 100000) {
                delete cars[car];
                console.log(`Time to sell the ${car}!`);
            }

        } else {
            console.log("Not enough fuel to make that ride");
        }
    }

    function refuel(car, fuel) {
        fuel = +fuel;
        let exsistingFuel = cars[car][1];
        let neededFuel = 75 - exsistingFuel;
        exsistingFuel += fuel;

        if (exsistingFuel < 75) {
            cars[car][1] = exsistingFuel;
            console.log(`${car} refueled with ${fuel} liters`);

        } else {
            cars[car][1] = 75;
            console.log(`${car} refueled with ${neededFuel} liters`);
        }
    }

    function revert(car, kilometers) {
        kilometers = +kilometers;
        let exsistingMileAge = cars[car][0];
        exsistingMileAge -= kilometers;

        if (exsistingMileAge < 10000) {
            cars[car][0] = 10000;
        } else {
            cars[car][0] = exsistingMileAge;
            console.log(`${car} mileage decreased by ${kilometers} kilometers`);
        }
    }

    let arr = Object.entries(cars)
        .sort(sorted);

    for (let [car, tokens] of arr) {
        console.log(`${car} -> Mileage: ${tokens[0]} kms, Fuel in the tank: ${tokens[1]} lt.`);
    }

    function sorted(cars1, cars2) {
        let [name1, tokens1] = cars1;
        let [name2, tokens2] = cars2;

        let firstCriteria = tokens2[0] - tokens1[0];
        if (firstCriteria === 0) {
            return name1.localeCompare(name2);
        }

        return firstCriteria;
    }
}

solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ])