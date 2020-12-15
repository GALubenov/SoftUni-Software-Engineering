function solve(recordInseconds, metersForSwiming, timeInSeconds) {
    recordInseconds = +recordInseconds;
    metersForSwiming = +metersForSwiming;
    timeInSeconds = +timeInSeconds;

    let timeForSwiming = metersForSwiming * timeInSeconds;
    let addedTime = Math.floor(metersForSwiming / 15) * 12.5;
    let totalTime = timeForSwiming + addedTime;
    
    if (totalTime < recordInseconds) {
        console.log(`Yes, he succeeded! The new world record is ${Math.abs(totalTime).toFixed(2)} seconds.`)
    } else if (totalTime >= recordInseconds) {
        console.log(`No, he failed! He was ${Math.abs(recordInseconds - totalTime).toFixed(2)} seconds slower.`);
    }
}

solve(
    '10464', '1500', '20'
)