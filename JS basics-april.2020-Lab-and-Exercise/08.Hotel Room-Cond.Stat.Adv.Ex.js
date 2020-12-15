function solve(month, day) {
    day = +day;
    let sumStudio = 0;
    let sumApartment = 0;

    if (month === 'May' || month === 'October') {
        if (day <= 7) {
            sumApartment = (day * 65);
            sumStudio = (day * 50);
        } else if (day > 7 && day <= 14) {
            sumApartment = (day * 65);
            sumStudio = (day * 50) - (day * 50 * 0.05);
        } else if (day > 14) {
            sumApartment = (day * 65) - (day * 65 * 0.1);
            sumStudio = (day * 50) - (day * 50 * 0.3);
        }

    } else if (month === 'June' || month === 'September') {
        if (day <= 7) {
            sumApartment = (day * 68.7);
            sumStudio = (day * 75.20);
        } else if (day > 7 && day <= 14) {
            sumApartment = (day * 68.7);
            sumStudio = (day * 75.20);
        } else if (day > 14) {
            sumApartment = (day * 68.7) - (day * 68.7 * 0.1);
            sumStudio = (day * 75.20) - (day * 75.20 * 0.2);
        }

    } else if (month === 'July' || month === 'August') {
        sumApartment = (day * 77);
        sumStudio = (day * 76);
        if (day > 14) {
            sumApartment = (day * 77) - (day * 77 * 0.1);
        }
    }

    console.log(`Apartment: ${sumApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${sumStudio.toFixed(2)} lv.`);
}
solve(
    // "May", '15'
   // 'June', '14'
    'August', '20'
);