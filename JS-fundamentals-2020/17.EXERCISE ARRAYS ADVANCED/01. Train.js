function solve(input) {
    let wagons = input.shift().split(' ').map(Number);
    let maxCapacity = input.shift();

    for (let line of input) {
        let [command, argument] = line.split(' ');

        if (command === 'Add') {
            wagons.push(Number(argument));
        } else {
            let numPassengers = Number(command);

            for (let i = 0; i < wagons.length; i++) {
                let currentPassengers = wagons[i];
                if (currentPassengers + numPassengers <= maxCapacity) {
                    wagons[i] = currentPassengers + numPassengers;
                    break;
                }
            }
        }
    }

    console.log(wagons.join(' '));
}

solve(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75'])

solve(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6'])