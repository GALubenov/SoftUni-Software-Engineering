function solve(product, num) {
    num = Number(num);
    let result = 0;
    if (product === 'coffee') {
        result += num * 1.5;
    } else if (product === 'coke') {
        result += num * 1.4;
    } else if (product === 'water') {
        result += num * 1;
    } else if (product === 'snacks') {
        result += num * 2;
    }
    console.log(result.toFixed(2))
}

solve(
    'water',
    5

)