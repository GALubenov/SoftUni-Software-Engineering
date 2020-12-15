function aaa(args) {
    let day = 0
    let hour = 0
    let oddHour = 0
    let evenHour = 0

    let sumEvenDayOddHour = 0
    let sumOddDayEvenHour = 0
    let sum = 0
    let sum1 = 0
    let sum2 = 0
    for (let b = 1; b <= Number(args[1]); b++) {
        hour++;
        if (hour % 2 == 0) {
            evenHour++;
        }
        if (hour % 2 != 0) {
            oddHour++;
        }
    }
    for (let i = 1; i <= Number(args[0]); i++) {
        day++;
        if (day % 2 != 0) {
            sumOddDayEvenHour = (evenHour * 1.25) + (oddHour * 1);
            console.log(`Day: ${day} - ${sumOddDayEvenHour.toFixed(2)} leva`);
            sum1 += sumOddDayEvenHour;
        }
        if (day % 2 == 0) {
            sumEvenDayOddHour = (oddHour * 2.5) + (evenHour * 1);
            console.log(`Day: ${day} - ${sumEvenDayOddHour.toFixed(2)} leva`);
            sum2 += sumEvenDayOddHour;
        }
        sum = sum1 + sum2;
    }
    console.log(`Total: ${(sum).toFixed(2)} leva`);
}
aaa([2, 5])
