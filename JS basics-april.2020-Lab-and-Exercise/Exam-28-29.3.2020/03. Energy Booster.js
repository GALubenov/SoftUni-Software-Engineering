function solve(input) {
    let product = input[0];
    let command = input[1];
    let numProduct = +input[2];
    let sum = 0;

    if (product === 'Watermelon') {
        if (command === 'big') {
            sum += numProduct * (28.7 * 5);
        } else {
            sum += numProduct * (56 * 2);
        }
    } else if (product === 'Mango') {
        if (command === 'big') {
            sum += numProduct * (19.6 * 5);
        } else {
            sum += numProduct * (36.66 * 2);
        }
    } else if (product === 'Pineapple') {
        if (command === 'big') {
            sum += numProduct * (24.8 * 5);
        } else {
            sum += numProduct * (42.1 * 2);
        }
    } else if (product === 'Raspberry') {
        if (command === 'big') {
            sum += numProduct * (15.2 * 5);
        } else {
            sum += numProduct * (20 * 2);
        }
    }

    if (sum >= 400 && sum <= 1000) {
        sum = sum - (sum * 0.15);
        console.log(`${sum.toFixed(2)} lv.`);
    } else if (sum > 1000) {
        sum = sum - (sum * 0.5);
        console.log(`${sum.toFixed(2)} lv.`);
    } else {
        console.log(`${sum.toFixed(2)} lv.`);
    }
}

solve(
    // ['Watermelon','big',4]
    ['Pineapple', 'small', 1]
)