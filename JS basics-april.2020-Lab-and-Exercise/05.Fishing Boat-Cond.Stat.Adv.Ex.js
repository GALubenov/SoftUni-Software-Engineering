function solve(budget, season, num) {
    num = +num;
    budget = +budget;
    let sum = 0;

    if (season === 'Summer' || season === 'Autumn') {
        if (num <= 6) {
            sum += 4200 - (4200 * 0.1);
        } else if (num >= 7 && num <= 11) {
            sum += 4200 - (4200 * 0.15);
        } else {
            sum += 4200 - (4200 * 0.25);
        }

    } else if (season === 'Winter') {
        if (num <= 6) {
            sum += 2600 - (2600 * 0.1);
        } else if (num >= 7 && num <= 11) {
            sum += 2600 - (2600 * 0.15);
        } else {
            sum += 2600 - (2600 * 0.25);
        }

    } else if (season === 'Spring') {
        if (num <= 6) {
            sum += 3000 - (3000 * 0.1);
        } else if (num >= 7 && num <= 11) {
            sum += 3000 - (3000 * 0.15);
        } else {
            sum += 3000 - (3000 * 0.25);
        }

    }

    if (num % 2 === 0 && season !== 'Autumn') {
        sum = sum - (sum * 0.05);
    }

    if (sum <= budget) {
        console.log(`Yes! You have ${Math.abs(budget - sum).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${Math.abs(sum - budget).toFixed(2)} leva.`);
    }
}

solve(
    // "3600", "Autumn", 6
    //'3000', 'Summer', '11'
    '2000', 'Winter', 13
)