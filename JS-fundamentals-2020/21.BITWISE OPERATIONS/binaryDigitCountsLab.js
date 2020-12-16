function solve(n, b) {

    let count = 0;
    let binary = '';

    while (n > 0) {
        let reminder = n % 2;
        if (reminder === b) {
            count++;
        }
        
        binary = reminder + binary;
        n = n / 2;
        n = Math.floor(n);
    }

    console.log(count);
}

solve(20, 0) //-> 3
solve(15, 1) //-> 4
solve(10, 0) //-> 2
solve(23, 1) //-> 4
