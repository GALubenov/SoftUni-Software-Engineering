function solve(budget, actors, sumClothes) {
    budget = +budget;
    actors = +actors;
    sumClothes = +sumClothes;

    let sumForDecor = budget * 0.1;
    let sumForStatist = actors * sumClothes;

    if (actors > 150) {
        sumForStatist -= sumForStatist * 0.1;
    }

    let totalSum = sumForDecor + sumForStatist;

    if (totalSum <= budget) {
        console.log('Action!');
        console.log(`Wingard starts filming with ${(budget - totalSum).toFixed(2)} leva left.`);
    } else {
        console.log('Not enough money!');
        console.log(`Wingard needs ${(totalSum - budget).toFixed(2)} leva more.`)
    }
}

solve(
    '9587.88', '222', '55.68'
)