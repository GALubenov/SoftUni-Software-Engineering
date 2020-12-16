function solve(input) {
    let obj = {};
    let n = Number(input.shift());
    for (let i = 0; i < n; i++) {
        let [car, mile, fuel] = input.shift().split('|');
        obj[car] = { Mileage: Number(mile), Fuel: Number(fuel) }
    }

    let actions = {
        Drive: (car, distance, neededFuel) => {
            distance = Number(distance);
            neededFuel = Number(neededFuel);

            if (obj[car].Fuel >= neededFuel) {
                obj[car].Mileage += distance;
                obj[car].Fuel -= neededFuel;
                console.log(`${car} driven for ${distance} kilometers. ${neededFuel} liters of fuel consumed.`);
            } else {
                console.log("Not enough fuel to make that ride");
            }

            if (obj[car].Mileage >= 100000) {
                console.log(`Time to sell the ${car}!`);
                delete obj[car];
            }
        },
        Refuel: (car, fuel) => {
            fuel = Number(fuel);
            let extFuel = obj[car];
            if (extFuel.Fuel + fuel > 75) {
                fuel = 75 - extFuel.Fuel;
            }

            extFuel.Fuel += fuel;
            console.log(`${car} refueled with ${fuel} liters`)
        },
        Revert: (car, kilometers) => {
            kilometers = Number(kilometers);
            obj[car].Mileage -= kilometers;
            if (obj[car].Mileage < 10000) {
                obj[car].Mileage = 10000;
            } else {
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }
        }
    }

    let line = input.shift();
    while (line != 'Stop') {
        let [command, car, args1, args2] = line.split(' : ');
        actions[command](car, args1, args2);
        line = input.shift();
    }

    let sorted = Object.keys(obj).sort((a, b) => {
        let firstCriteria = obj[b].Mileage - obj[a].Mileage;
        if (firstCriteria === 0) {
            return a.localeCompare(b);
        }
        return firstCriteria;
    })

    for (let name of sorted) {
        console.log(`${name} -> Mileage: ${obj[name].Mileage} kms, Fuel in the tank: ${obj[name].Fuel} lt.`);
    }
}

solve(['3', 'Audi A6|38000|62', 'Mercedes CLS|11000|35', 'Volkswagen Passat CC|45678|5', 'Drive : Audi A6 : 543 : 47', 'Drive : Mercedes CLS : 94 : 11', 'Drive : Volkswagen Passat CC : 69 : 8', 'Refuel : Audi A6 : 50', 'Revert : Mercedes CLS : 500', 'Revert : Audi A6 : 30000', 'Stop'])
solve(['4', 'Lamborghini Veneno|11111|74', 'Bugatti Veyron|12345|67', 'Koenigsegg CCXR|67890|12', 'Aston Martin Valkryie|99900|50', 'Drive : Koenigsegg CCXR : 382 : 82', 'Drive : Aston Martin Valkryie : 99 : 23', 'Drive : Aston Martin Valkryie : 2 : 1', 'Refuel : Lamborghini Veneno : 40', 'Revert : Bugatti Veyron : 2000', 'Stop'])