function solve(type, rows, colums) {
    rows = +rows;
    colums = +colums;

    let sum = 0;

    if (type === 'Premiere') {
        sum += rows * colums * 12;

    } else if (type === 'Normal') {
        sum += rows * colums * 7.5;
    } else if (type === 'Discount') {
        sum += rows * colums * 5;
    }

    console.log(sum.toFixed(2) + ' leva');
}

solve(
    'Premiere', 10, 12
)