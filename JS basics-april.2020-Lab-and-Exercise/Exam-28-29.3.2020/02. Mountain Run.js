function solve(input) {

    let record = +input[0];
    let meters = +input[1];
    let timeInSeconds = +input[2];

    let distanceInTime = meters * timeInSeconds;
    let extraTime = Math.floor(meters / 50) * 30;
    let totalTime = distanceInTime + extraTime;

    if (totalTime < record) {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`)
    } else {
        console.log(`No! He was ${(totalTime - record).toFixed(2)} seconds slower.`)
    }

}

solve(
    [
        5554.,
1340,
3.23

    ]
)