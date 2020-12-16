function solve(num1, num2, operator) {
    num1 = Number(num1);
    num2 = Number(num2);

    switch (operator) {
        case 'multiply': calc = (a, b) => (a * b);
            break;
        case 'divide': calc = (a, b) => (a / b);
            break;
        case 'add': calc = (a, b) => (a + b);
            break;
        case 'subtract': calc = (a, b) => (a - b);
            break;
    }

    console.log(calc(num1, num2));

}

solve(
    5,
    5,
    'multiply'

)