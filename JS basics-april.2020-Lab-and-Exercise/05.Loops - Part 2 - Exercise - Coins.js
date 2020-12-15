function solve(input) {
    let coins = +input[0];
    let counter = 0;

    while (coins > 0.0) {
        if (coins >= 2) {
            coins -= 2;
            coins = coins.toFixed(2);
            coins = +coins;
        } else if (coins >= 1) {
            coins -= 1;
            coins = coins.toFixed(2);
            coins = +coins;
        } else if (coins >= 0.50) {
            coins -= 0.50;
            coins = coins.toFixed(2);
            coins = +coins;
        } else if (coins >= 0.20) {
            coins -= 0.20;
            coins = coins.toFixed(2);
            coins = +coins;
        } else if (coins >= 0.10) {
            coins -= 0.10;
            coins = coins.toFixed(2);
            coins = +coins;
        } else if (coins >= 0.05) {
            coins -= 0.05;
            coins = coins.toFixed(2);
            coins = +coins;
        } else if (coins >= 0.02) {
            coins -= 0.02;
            coins = coins.toFixed(2);
            coins = +coins;
        } else if (coins >= 0.01) {
            coins -= 0.01;
            coins = coins.toFixed(2);
            coins = +coins;
        }

        counter++;
    }

    console.log(counter);
}

solve(
    ['1.23']
)