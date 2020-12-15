function solve(n1, n2, operator) {
    n1 = +n1;
    n2 = +n2;

    let sum = 0;
    let oddOrEven = '';

    switch (operator) {
        case '+': sum = n1 + n2;
            if (sum % 2 === 0) {
                oddOrEven = 'even';
            } else {
                oddOrEven = 'odd';
            }
            console.log(`${n1} + ${n2} = ${sum} - ${oddOrEven}`);
            break;
        case '-': sum = n1 - n2;
            if (sum % 2 === 0) {
                oddOrEven = 'even';
            } else {
                oddOrEven = 'odd';
            }
            console.log(`${n1} - ${n2} = ${sum} - ${oddOrEven}`);
            break;
        case '*': sum = n1 * n2;
            if (sum % 2 === 0) {
                oddOrEven = 'even';
            } else {
                oddOrEven = 'odd';
            }
            console.log(`${n1} * ${n2} = ${sum} - ${oddOrEven}`);
            break;
        case '/':
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                sum = n1 / n2;
                console.log(`${n1} / ${n2} = ${sum.toFixed(2)}`);
            }
            break;
        case '%':
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                sum = n1 % n2;
                console.log(`${n1} % ${n2} = ${sum}`);
            }
            break;
    }
}

solve(
    50, 2, '%'
)