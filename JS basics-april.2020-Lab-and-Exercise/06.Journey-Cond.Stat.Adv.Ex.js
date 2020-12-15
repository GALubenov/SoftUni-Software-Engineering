function solve(budget, season) {
    budget = +budget;
    let sum = 0;
    let country = '';
    let destination = '';

    if (season === 'summer') {
        if (budget <= 100) {
            sum = budget * 0.3;
            country = 'Bulgaria';
            destination = 'Camp';

        } else if (budget <= 1000) {
            sum = budget * 0.4;
            country = 'Balkans';
            destination = 'Camp';

        } else {
            sum = budget * 0.9;
            country = 'Europe';
            destination = 'Hotel';
        }

    } else if (season === 'winter') {
        if (budget <= 100) {
            sum = budget * 0.7;
            country = 'Bulgaria';
            destination = 'Hotel';

        } else if (budget <= 1000) {
            sum = budget * 0.8;
            country = 'Balkans';
            destination = 'Hotel';

        } else {
            sum = budget * 0.9;
            country = 'Europe';
            destination = 'Hotel';
        }
    }

    console.log(`Somewhere in ${country}`);
    console.log(`${destination} - ${sum.toFixed(2)}`);
}

solve(
     "312", "summer"
    // '50', 'summer'
    // '75', 'winter'
)