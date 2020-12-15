function solve(product, num, budget) {
    num = +num;
    budget = +budget;

    let sum = 0;

    for (let i = 0; i < product.length; i++) {
        switch (product[i]) {
            case 'a': sum += 3;
                break;
            case 'e': sum += 3;
                break;
            case 'i': sum += 3;
                break;
            case 'o': sum += 3;
                break;
            case 'u': sum += 3;
                break;
            case 'y': sum += 3;
                break;
            default: sum += 1;
                break;
        }
    }
    sum = sum * num;

    if (budget >= sum) {
        console.log(`${product} bought. Money left: ${(budget - sum).toFixed(2)}`);
    } else {
        console.log(`Cannot buy ${product}. Product value: ${sum.toFixed(2)}`);
    }

}

solve(
    'milk', '1.4', '8'
);