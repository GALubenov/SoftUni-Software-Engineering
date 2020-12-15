function solve(start, end, num) {
    num = +num;
    start = +start;
    end = +end;

    for (let i = start; i <= end; i++) {

        if (i % num !== 0) {
            console.log(i);
        }

        else if (i % num === 0) {

            if (i % (num ** 2) === 0) {
                console.log(`Very special number: ${i}`);
            } else {
                console.log(`Special number: ${i}`);
            }
        }
    }
}

solve(
    '1', '25', '3'
);