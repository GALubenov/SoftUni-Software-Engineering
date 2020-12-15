function solve(args) {
    let steps = Number(args[0]);

    let sum = 0;
    let num0To9 = 0;
    let num10To19 = 0;
    let num20To29 = 0;
    let num30To39 = 0;
    let num40To49 = 0;
    let num40To50 = 0;
    let numInvalid = 0;

    for (let i = 1; i <= steps; i++) {
        let element = Number(args[i]);
        if (0 <= element && element <= 9) {
            num0To9++;
            sum += element * 0.20;
        } else if (10 <= element && element <= 19) {
            num10To19++;
            sum += element * 0.30;
        } else if (20 <= element && element <= 29) {
            num20To29++;
            sum += element * 0.40;
        } else if (30 <= element && element <= 39) {
            num30To39++;
            sum += 50;
        } else if (40 <= element && element <= 50) {
            num40To50++;
            sum += 100;
        } else {
            sum /= 2;
            numInvalid++;
        }
    }
    console.log(sum.toFixed(2));
    console.log(`From 0 to 9: ${((num0To9 / steps) * 100).toFixed(2)} %`);
    console.log(`From 10 to 19: ${((num10To19 / steps) * 100).toFixed(2)} %`);
    console.log(`From 20 to 29: ${((num20To29 / steps) * 100).toFixed(2)} %`);
    console.log(`From 30 to 39: ${((num30To39 / steps) * 100).toFixed(2)} %`);
    console.log(`From 40 to 50: ${((num40To50 / steps) * 100).toFixed(2)} %`);
    console.log(`Invalid numbers: ${((numInvalid / steps) * 100).toFixed(2)} %`);
}
solve([10, 43, 57, -12, 23, 12, 0, 50, 40, 30, 20])

//второ решение
function solve(args) {
    let steps = Number(args[0]);
    let index = 1;

    let sum = 0;
    let num0To9 = 0;
    let num10To19 = 0;
    let num20To29 = 0;
    let num30To39 = 0;
    let num40To49 = 0;
    let num40To50 = 0;
    let numInvalid = 0;

    while (index <= steps) {
        let element = Number(args[index]);
        if (0 <= element && element <= 9) {
            num0To9++;
            sum += element * 0.20;
        } else if (10 <= element && element <= 19) {
            num10To19++;
            sum += element * 0.30;
        } else if (20 <= element && element <= 29) {
            num20To29++;
            sum += element * 0.40;
        } else if (30 <= element && element <= 39) {
            num30To39++;
            sum += 50;
        } else if (40 <= element && element <= 50) {
            num40To50++;
            sum += 100;
        } else {
            sum /= 2;
            numInvalid++;
        }
        index++;
    }
    console.log(sum.toFixed(2));
    console.log(`From 0 to 9: ${((num0To9 / steps) * 100).toFixed(2)} %`);
    console.log(`From 10 to 19: ${((num10To19 / steps) * 100).toFixed(2)} %`);
    console.log(`From 20 to 29: ${((num20To29 / steps) * 100).toFixed(2)} %`);
    console.log(`From 30 to 39: ${((num30To39 / steps) * 100).toFixed(2)} %`);
    console.log(`From 40 to 50: ${((num40To50 / steps) * 100).toFixed(2)} %`);
    console.log(`Invalid numbers: ${((numInvalid / steps) * 100).toFixed(2)} %`);
}
solve([10, 43, 57, -12, 23, 12, 0, 50, 40, 30, 20])