function solve(town, num) {
    num = Number(num);
    let sum = 0;
    if (town === 'Sofia') {
        if (num < 0) {
            console.log('error');
        } else if (num <= 500) {
            sum += num * 0.05;
        } else if (num <= 1000) {
            sum += num * 0.07;
        } else if (num <= 10000) {
            sum += num * 0.08;
        } else if (num > 10000) {
            sum += num * 0.12;
        }

    } else if (town === 'Plovdiv') {
        if (num < 0) {
            console.log('error');
        } else if (num <= 500) {
            sum += num * 0.055;
        } else if (num <= 1000) {
            sum += num * 0.08;
        } else if (num <= 10000) {
            sum += num * 0.12;
        } else if (num > 10000) {
            sum += num * 0.145;
        }

    } else if (town === 'Varna') {
        if (num < 0) {
            console.log('error');
        } else if (num <= 500) {
            sum += num * 0.045;
        } else if (num <= 1000) {
            sum += num * 0.075;
        } else if (num <= 10000) {
            sum += num * 0.1;
        } else if (num > 10000) {
            sum += num * 0.13;
        }

    } else {
        console.log('error');
    }

    if (sum !== 0) {
        console.log(sum.toFixed(2));
    }
}

solve(
    // 'Sofia', '1500'
    // 'Plovdiv', 499.99
    // 'Varna', '3874.50'
    'Vara', '50'
)