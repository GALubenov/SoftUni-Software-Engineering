function coins(input) {
    let coins = Number(input[0]);
    let counter = 0;
    while (coins > 0.0) {

        if (coins >= 2.0) {
            coins = (coins - 2.0).toFixed(2);
            coins = Number(coins);
            counter++;
        } else if (coins >= 1.0) {
            coins = (coins - 1.0).toFixed(2);
            coins = Number(coins);
            counter++;
        } else if (coins >= 0.50) {
            coins = (coins - 0.50).toFixed(2);
            coins = Number(coins);
            counter++;
        } else if (coins >= 0.20) {
            coins = (coins - 0.20).toFixed(2);
            coins = Number(coins);
            counter++;
        } else if (coins >= 0.10) {
            coins = (coins - 0.10).toFixed(2);
            coins = Number(coins);
            counter++;
        } else if (coins >= 0.05) {
            coins = (coins - 0.05).toFixed(2);
            coins = Number(coins);
            counter++;
        } else if (coins >= 0.02) {
            coins = (coins - 0.02).toFixed(2);
            coins = Number(coins);
            counter++;
        } else {
            coins = (coins - 0.01).toFixed(2);
            coins = Number(coins);
            counter++;
        }
    }
    console.log(counter)
}
coins([2.73])