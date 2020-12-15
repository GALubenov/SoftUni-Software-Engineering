function solve(age, priceProduct, price) {
    age = +age;
    priceProduct = +priceProduct;
    price = +price;

    let sum = 0;
    let lastSum = 0;
    let count = 0;

    for (let i = 1; i <= age; i++) {

        if (i % 2 === 0) {
            sum += lastSum + 9;
            lastSum += 10;
        } else {
            count++;
        }
    }

    sum = sum + (count * price);

    if (sum >= priceProduct) {
        console.log(`Yes! ${(sum - priceProduct).toFixed(2)}`);
    } else {
        console.log(`No! ${(priceProduct - sum).toFixed(2)}`);
    }
}

solve(
   // '10', '170', '6'
    '21', '1570.98', '3'
);