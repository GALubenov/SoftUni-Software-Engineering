function solve(input) {
    let time = input[0].split(':').map(Number);
    let steps = Number(input[1]);
    let secondOfSteps = Number(input[2]);
    let totalSeconds = steps * secondOfSteps;
    let hours = time[0];
    let minute = time[1];
    let sec = time[2];

    for (let i = 1; i <= totalSeconds; i++) {
        sec++;
        if (sec === 60) {
            minute++
            sec = 0;
        }

        if (minute === 60) {
            hours++;
            minute = 0;
        }

        if (hours === 24) {
            hours = 0;
        }
        
    }

    if (hours < 10) {
               hours = '0' + hours
    } 
    if (minute < 10) {
        minute = '0' + minute
    }
    if (sec < 10) {
        sec = '0' + sec;
    }

   // console.log(`${hours} h : ${minute} m : ${sec} s`)
    console.log(`Time Arrival: ${hours}:${minute}:${sec}`);
   
}

solve(['12:30:30', '90', '1']) //->12:32:00

solve(['23:49:13',    '5424',    '2']) // -> 02:50:01

// console.log(secondsToTime(totalSeconds))
function secondsToTime(secs) {
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            "h": hours + " hours",
            "m": minutes + " minutes",
            "s": seconds + " seconds"
        };
        return obj;
    }