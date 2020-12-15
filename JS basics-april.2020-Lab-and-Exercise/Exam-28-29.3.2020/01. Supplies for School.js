function solve(input) {

    let numPen = +input[0] * 5.8;
    let numMarker = +input[1] * 7.2;
    let liters = +input[2] * 1.2;
    let percent = +input[3];

    let price = (numPen + numMarker + liters) - (((numPen + numMarker + liters) * percent) / 100);

    console.log(price.toFixed(3))

}

solve([2, 3, 2.5, 25])