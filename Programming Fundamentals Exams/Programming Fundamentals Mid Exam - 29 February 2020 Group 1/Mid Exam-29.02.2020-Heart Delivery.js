function solve(input) {
    let neighborhood = input.shift().split('@').map(Number);
    let indexOfHouse = 0;

    for (let line of input) {
        let [command, length] = line.split(' ');
        length = +length;

        if (command === 'Love!') {
            break;
        } else if (command === 'Jump') {
            heartDelivery(length);
        }
    }

    function heartDelivery(length) {
        indexOfHouse += length;

        if (indexOfHouse >= 0 && indexOfHouse < neighborhood.length) {

            neighborhood[indexOfHouse] -= 2;
            
        } else {

            indexOfHouse = 0;
            neighborhood[indexOfHouse] -= 2;

            if (neighborhood[indexOfHouse] < 0) {
                neighborhood[indexOfHouse] = 0;
            }
        }

    }

    console.log(`Cupid's last position was ${indexOfHouse}.`);

    let houseCount = 0;
    for (let num of neighborhood) {
        if (num !== 0) {
            houseCount++;
        }
    }
    if (houseCount === 0) {
        console.log(`Mission was successful.`);
    } else {
        console.log(`Cupid has failed ${houseCount} places.`);
    }
}

solve(
    ['10@10@10@2', 'Jump 1', 'Jump 2', 'Love!']

    // ['2@4@2', 'Jump 2',  'Jump 2', 'Jump 8',  'Jump 3', 'Jump 1',  'Love!']
)

