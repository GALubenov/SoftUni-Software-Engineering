function solve(n, k) {
    let result = [1];
    for (let i = 1; i < n; i++) {
        let sum = 0;
        let currentElement = result.slice(-k);
        for (let element of currentElement) {
            sum += element;
        }

        result.push(sum);
    }
    console.log(result.join(' '));
}

solve(8, 2)