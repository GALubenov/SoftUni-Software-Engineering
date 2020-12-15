function solve(hourExam, minuteExam, hourArrive, minuteArrive) {
    hourExam = +hourExam;
    minuteExam = + minuteExam;
    hourArrive = +hourArrive;
    minuteArrive = +minuteArrive;

    let hh = 0;
    let mm = 0;
    if (hourExam === hourArrive && minuteExam === minuteArrive) {
        console.log('On time');

    } else if (hourExam === hourArrive) {
        mm = minuteExam - minuteArrive;

        if (minuteArrive > minuteExam) {
            console.log('Late');
            console.log(`${Math.abs(mm)} minutes after the start`);
        } else if (minuteArrive < minuteExam && Math.abs(mm) <= 30) {
            console.log('On time');
            console.log(`${mm} minutes before the start`);
        } else if (minuteArrive < minuteExam && Math.abs(mm) > 30) {
            console.log('Early');
            console.log(`${mm} minutes before the start`);
        }

    } else if (hourArrive > hourExam) {
        console.log('Late');
        hh = hourArrive - hourExam;
        mm = minuteArrive - minuteExam;

        if (minuteArrive >= minuteExam) {
            if (mm < 10) {
                console.log(`${hh}:0${mm} hours after the start`);
            } else {
                console.log(`${hh}:${mm} hours after the start`);
            }
        } else {
            mm = 60 - Math.abs(mm);
            console.log(`${mm} minutes after the start`);
        }

    } else if (hourArrive < hourExam) {
        if (hourExam - hourArrive === 1) {
            let ostMin = (60 - minuteArrive) + minuteExam;
            let hours = Math.floor(ostMin / 60);
            let minutes = ostMin % 60;

            if (hours === 0 && minutes <= 30) {
                console.log('On time');
                console.log(`${minutes} minutes before the start`);
            } else if (hours === 0 && minutes > 30 && minutes < 60){
                console.log('Early');
                console.log(`${minutes} minutes before the start`);
            } else {
                console.log('Early');
                console.log(`${hours}:0${minutes} hours before the start`);
            }
        } else {
            let ostMin = ((hourExam - hourArrive) * 60 - minuteArrive) + minuteExam;
            let hours = Math.floor(ostMin / 60);
            let minutes = ostMin % 60;
            if (minutes < 10) {
                console.log('Early');
                console.log(`${hours}:0${minutes} hours before the start`);
            } else {
                console.log('Early');
                console.log(`${hours}:${minutes} hours before the start`);
            }
        }
    }
}


solve(
     '16', 00, '15', '00'
    // '11', 30, '08', '12'
    // '11', 30, '10', '55'

    //'9', '15', '8', '46'
    // '14', '00', '13', '55'
    // '10', '00', '10', '00'


    //  '11', '30', '12', '29'
    // '9', '00', '10', 30
    //   '9', '30', '9', '50'
)