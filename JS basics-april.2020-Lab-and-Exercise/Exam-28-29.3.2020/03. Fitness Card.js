function solve(input) {
    let budget = +input[0];
    let gender = input[1];
    let age = +input[2];
    let product = input[3];
    let sum = 0;

    if (gender === 'm') {
        if (product === 'Gym') {
            if (age <= 19) {
                sum += 42 - (42 * 0.2);
            } else {
                sum += 42;
            }
        } else if (product === 'Boxing') {
            if (age <= 19) {
                sum += 41 - (41 * 0.2);
            } else {
                sum += 41;
            }
        } else if (product === 'Yoga') {
            if (age <= 19) {
                sum += 45 - (45 * 0.2);
            } else {
                sum += 45;
            }
        } else if (product === 'Zumba') {
            if (age <= 19) {
                sum += 34 - (34 * 0.2);
            } else {
                sum += 34;
            }
        } else if (product === 'Dances') {
            if (age <= 19) {
                sum += 51 - (51 * 0.2);
            } else {
                sum += 51;
            }
        } else {
            if (age <= 19) {
                sum += 39 - (39 * 0.2);
            } else {
                sum += 39;
            }
        }

    } else {
        if (product === 'Gym') {
            if (age <= 19) {
                sum += 35 - (35 * 0.2);
            } else {
                sum += 35;
            }
        } else if (product === 'Boxing') {
            if (age <= 19) {
                sum += 37 - (37 * 0.2);
            } else {
                sum += 37;
            }
        } else if (product === 'Yoga') {
            if (age <= 19) {
                sum += 42 - (42 * 0.2);
            } else {
                sum += 42;
            }
        } else if (product === 'Zumba') {
            if (age <= 19) {
                sum += 31 - (31 * 0.2);
            } else {
                sum += 31;
            }
        } else if (product === 'Dances') {
            if (age <= 19) {
                sum += 53 - (53 * 0.2);
            } else {
                sum += 53;
            }
        } else {
            if (age <= 19) {
                sum += 37 - (37 * 0.2);
            } else {
                sum += 37;
            }
        }
    }

    if (budget >= sum) {
        console.log(`You purchased a 1 month pass for ${product}.`);

    } else {
        sum = sum - budget;
        console.log(`You don't have enough money! You need $${sum.toFixed(2)} more.`);
    }
}

solve(
     [20,'f',15,'Yoga']
    // [50, 'm', 23, 'Gym']
)