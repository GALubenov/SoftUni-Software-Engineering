function solve(input) {

    let waitingPeople = Number(input.shift());
    let liftSpots = Array.from(input.shift().split(' ').map(x => Number(x)));

    for (let i = 0; i < liftSpots.length; i++) {

        let initialSeatsOnLift = liftSpots[i];
        let freeSeats = 4 - initialSeatsOnLift;

        if (freeSeats > 0 && waitingPeople > 0) {
            if (waitingPeople >= freeSeats) {
                liftSpots[i] += freeSeats;
                waitingPeople -= freeSeats;
            } else {
                liftSpots[i] += waitingPeople;
                waitingPeople -= liftSpots[i];
            }
        }
    }

    if (waitingPeople <= 0) {
        console.log(`The lift has empty spots!`);
        console.log(`${liftSpots.join(' ')}`);
    } else {
        console.log(`There isn't enough space! ${waitingPeople} people in a queue!`);
        console.log(`${liftSpots.join(' ')}`);
    }

}

solve(
     ["15", "0 0 0 0 0"]
    //  ["20", "0 2 0"]

)