function solve(day, room, evaluation) {
    day = +day - 1;
    let sum = 0;

    if (day < 10) {
        if (room === 'room for one person') {
            sum += day * 18;
        } else if (room === 'apartment') {
            sum += (day * 25) - ((day * 25) * 0.3);
        } else if (room === 'president apartment') {
            sum += (day * 35) - ((day * 35) * 0.1);
        }

    } else if (day >= 10 && day <= 15) {
        if (room === 'room for one person') {
            sum += day * 18;
        } else if (room === 'apartment') {
            sum += (day * 25) - ((day * 25) * 0.35);
        } else if (room === 'president apartment') {
            sum += (day * 35) - ((day * 35) * 0.15);
        }

    } else if (day > 15) {
        if (room === 'room for one person') {
            sum += day * 18;
        } else if (room === 'apartment') {
            sum += (day * 25) - ((day * 25) * 0.5);
        } else if (room === 'president apartment') {
            sum += (day * 35) - ((day * 35) * 0.20);
        }
    }

    if (evaluation === 'positive') {
        sum += sum * 0.25;
        console.log(sum.toFixed(2));

    } else if (evaluation === 'negative') {
        sum -= sum * 0.1;
        console.log(sum.toFixed(2));
    }

}

solve(
    // '14', 'apartment', 'positive'
    '30', 'president apartment', 'negative'
)