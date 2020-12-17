function solve(input) {
    let pirateShipStatus = input.shift().split('>').map(Number);
    let warShipStatus = input.shift().split('>').map(Number);
    let healthCapacity = Number(input.shift());
    let commandLine = input.shift();
    let salemate = true;

    while (commandLine !== 'Retire') {
        let [command, firstArg, secondArg, thirdArg] = commandLine.split(' ');
        firstArg = Number(firstArg);
        secondArg = Number(secondArg);
        thirdArg = Number(thirdArg);

        switch (command) {
            case 'Fire': fire(firstArg, secondArg);
                break;
            case 'Defend': defend(firstArg, secondArg, thirdArg);
                break;
            case 'Repair': repair(firstArg, secondArg);
                break;
            case 'Status': status(pirateShipStatus);
                break;
        }

        if (!salemate) {
            break;
        }

        commandLine = input.shift();
    }

    function fire(index, damage) {
        if (index >= 0 && index < warShipStatus.length) {
            warShipStatus[index] -= damage;

            if (warShipStatus[index] <= 0) {
                salemate = false;
                console.log("You won! The enemy ship has sunken.");
            }
        }
    }

    function defend(startIndex, endIndex, damage) {
        if (startIndex >= 0 && startIndex < pirateShipStatus.length && endIndex >= 0 && endIndex < pirateShipStatus.length) {
            for (let i = startIndex; i <= endIndex; i++) {
                pirateShipStatus[i] -= damage;
                if (pirateShipStatus[i] <= 0) {
                    salemate = false;
                    console.log("You lost! The pirate ship has sunken.");
                    break;
                }
            }
        }
    }

    function repair(index, health) {
        if (index >= 0 && index < pirateShipStatus.length) {
            pirateShipStatus[index] += health;

            if (pirateShipStatus[index] > healthCapacity) {
                pirateShipStatus[index] = healthCapacity;
            }
        }
    }

    function status(arr) {
        let count = 0;
        for (let item of arr) {
            if (item < healthCapacity * 0.2) {
                count++;
            }
        }
        console.log(`${count} sections need repair.`);
    }

    if (salemate) {
        let sumPirateShip = pirateShipStatus.reduce((acc, item) => { return acc += item }, 0);
        let sumWarShip = warShipStatus.reduce((acc, item) => { return acc + item }, 0);
        console.log(`Pirate ship status: ${sumPirateShip}`);
        console.log(`Warship status: ${sumWarShip}`);
    }
}

solve(
       ['12>13>11>20>66', '12>22>33>44>55>32>18', '70', 'Fire 2 11', 'Fire 8 100', 'Defend 3 6 11', 'Defend 0 3 5', 'Repair 1 33', 'Status', 'Retire']

   // ['2>3>4>5>2', '6>7>8>9>10>11', '20', 'Status', 'Fire 2 3', 'Defend 0 4 11', 'Repair 3 18', 'Retire']
)