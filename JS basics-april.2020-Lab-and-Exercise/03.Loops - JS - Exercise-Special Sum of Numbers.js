function solve(start, end, divider) {
    start = +start;
    end = +end;
    divider = +divider;

    let sum = 0;

    for (let i = start; i <= end; i++) {

        if (i % divider === 0) {
            sum += i;
        }
    }

    console.log(sum);
}

solve(
    '10', '30', '7'
);