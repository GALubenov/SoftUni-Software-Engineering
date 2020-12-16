function solve(input) {
    let result = [];
    let sorted = input.sort((a, b) => b - a);
    while (sorted.length > 0) {
        let biggest = sorted.shift();
        let smallest = sorted.pop();
        result.push(biggest);
        result.push(smallest);
    }

    console.log(result.join(' '));
}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])