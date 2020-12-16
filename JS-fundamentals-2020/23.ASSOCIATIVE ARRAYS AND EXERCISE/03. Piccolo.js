function solve(input) {

    let arr = [];

    for (let line of input) {
        let [type, car] = line.split(', ');

        if (type === 'IN' && !arr.includes(car)) {
            arr.push(car);
        } else if (type === 'OUT' && arr.includes(car)) {
            let index = arr.indexOf(car);

            arr.splice(index, 1);
        }
    }

    let sorted = arr.sort((a, b) => a.localeCompare(b))

    if (sorted.length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        console.log(sorted.join('\n'))
    }
}

solve(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU'])
solve(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA'])
/*
let parkingLot = [];

input.forEach(element => {
    let [command, carNumber] = element.split(', ');

    if (command === 'IN' && !parkingLot.includes(carNumber)) {
        parkingLot.push(carNumber);
    } else if (command === 'OUT' && parkingLot.includes(carNumber)) {
        parkingLot = parkingLot.filter(x => x !== carNumber);
    }
});

if (parkingLot.length > 0) {
    console.log(parkingLot.sort((a, b) => a.localeCompare(b)).join('\n'));
} else {
    console.log('Parking Lot is Empty')
}
*/