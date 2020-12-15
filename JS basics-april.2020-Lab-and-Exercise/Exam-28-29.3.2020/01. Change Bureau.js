function solve(input) {

    let numOfBitcoin = +input[0];
    let lev1 = numOfBitcoin * 1168;
    let numOfYuan = +input[1];
    let commision = +input[2];
    let numOfDollar = numOfYuan * 0.15;
    let lev2 = numOfDollar * 1.76;
    let euro = (lev1 + lev2) / 1.95;

    console.log((euro - (euro * commision) / 100).toFixed(2))
}

solve(
    // [1, 5, 5]
    // [20, 5678,2.4]
    [7, 50200.12, 3]
)