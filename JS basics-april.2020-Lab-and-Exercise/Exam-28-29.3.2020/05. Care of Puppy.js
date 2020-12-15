function solve(input) {
    input.pop();
    let food = +input.shift() * 1000;
    let eatedFood = 0;

    for (let i = 0; i < input.length; i++) {
        eatedFood += +input[i];
    }

    if (eatedFood <= food) {
        console.log(`Food is enough! Leftovers: ${food - eatedFood} grams.`);
    } else {
        console.log(`Food is not enough. You need ${eatedFood - food} grams more.`);
    }
}

solve(
    // [4, 130, 345, 400, 180, 230, 120, 'Adopted']
    // [2, 999, 456, 999, 999, 123, 456, 'Adopted']
    [3, 1000, 1000, 1000, 'Adopted']
)