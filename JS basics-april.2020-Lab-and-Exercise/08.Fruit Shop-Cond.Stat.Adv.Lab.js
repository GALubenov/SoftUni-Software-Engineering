function solve(product, day, num) {
    num = Number(num);
    let sum = 0;

    if (day === 'Saturday' || day === 'Sunday') {

        switch (product) {
            case 'banana': sum += num * 2.7;
                break;
            case 'apple': sum += num * 1.25;
                break;
            case 'orange': sum += num * 0.9;
                break;
            case 'grapefruit': sum += num * 1.6;
                break;
            case 'kiwi': sum += num * 3;
                break;
            case 'pineapple': sum += num * 5.6;
                break;
            case 'grapes': sum += num * 4.2;
                break;
            default: console.log('error');
                break;
        }
    } else if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') {
        switch (product) {
            case 'banana': sum += num * 2.5;
                break;
            case 'apple': sum += num * 1.2;
                break;
            case 'orange': sum += num * 0.85;
                break;
            case 'grapefruit': sum += num * 1.45;
                break;
            case 'kiwi': sum += num * 2.7;
                break;
            case 'pineapple': sum += num * 5.5;
                break;
            case 'grapes': sum += num * 3.85;
                break;
            default: console.log('error');
                break;
        }

    } else {
        console.log('error');
    }

    if (sum !== 0) {
        console.log(sum.toFixed(2));
    }
}

solve(
    // 'apple',    'Tuesday',    2
    // 'orange', 'Sunday', '3'
    'tomato', 'Monday', 0.5
)