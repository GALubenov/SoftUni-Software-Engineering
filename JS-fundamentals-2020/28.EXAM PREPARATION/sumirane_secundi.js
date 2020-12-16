function sum(seconds) {
        
    let min = 0;
    if (seconds > 59) {
        min++; seconds = seconds - 60;
    } if (seconds < 10) {
        console.log(min + ":" + "0" + seconds);
    } else {
        console.log(min + ":" + seconds);
    }
}
sum(1000);

function calculateCenturies(centuries) {
    let years = centuries * 100;
    let days = Math.trunc(years * 365.2422);
    let hours = 24 * days;
    let minutes = 60 * hours;
    let seconds = 60 * minutes;
    console.log(`${centuries} centruries = ${years} years = ${hours} hours = ${minutes} minutes = ${seconds} seconds`)
}
calculateCenturies(1)

function secondsToTime(secs)
{
    var hours = Math.floor(secs / (60 * 60));

    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);

    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);

    var obj = {
        "h": hours + " hours",
        "m": minutes + " minutes",
        "s": seconds + " seconds"
    };
    return obj;
}

console.log(secondsToTime(90))



