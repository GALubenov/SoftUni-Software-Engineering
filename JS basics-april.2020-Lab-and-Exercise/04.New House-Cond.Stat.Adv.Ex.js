function solve(product, num, budget) {
    num = +num;
    budget = +budget;
    let sum = 0;

    if (product === 'Roses') {
        if (num > 80) {
            sum += (num * 5) - (num * 5 * 0.1);
        } else {
            sum += num * 5;
        }

    } else if (product === 'Dahlias') {
        if (num > 90) {
            sum += (num * 3.8) - (num * 3.8 * 0.15);
        } else {
            sum += num * 3.8;
        } 

    } else if (product === 'Tulips') {
        if (num > 80) {
            sum += (num * 2.8) - (num * 2.8 * 0.15);
        } else {
            sum += num * 2.8;
        }
    } else if (product === 'Narcissus') {
        if (num < 120) {
            sum += (num * 3) + (num * 3 * 0.15);
        } else {
            sum += num * 3;
        }

    } else if (product === 'Gladiolus') {
        if (num < 80) {
            sum += (num * 2.5) + (num * 2.5 * 0.2);
        } else {
            sum += num * 2.5;
        }
    }

    if (sum <= budget) {
        console.log(`Hey, you have a great garden with ${num} ${product} and ${Math.abs(budget - sum).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${Math.abs(sum - budget).toFixed(2)} leva more.`);
    }
}

solve(
   // "Roses", "55", 250
    'Tulips', '88', '260'

)