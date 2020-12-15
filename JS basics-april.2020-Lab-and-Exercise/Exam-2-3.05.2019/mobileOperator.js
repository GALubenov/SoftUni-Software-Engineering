function mobile(args) {
    let periodContract = args[0];
    let tipContract = args[1];
    let mobileNet = args[2];
    let numMonts = Number(args[3]);
    let sum1 = 0;
    let sum2 = 0;

    if (periodContract === "one") {
        if (tipContract === "Small") {
            sum1 = 9.98;
        } else if (tipContract === "Middle") {
            sum1 = 18.99;
        } else if (tipContract === "Large") {
            sum1 = 25.98;
        } else if (tipContract === "ExtraLarge") {
            sum1 = 35.99;
        }
    } else if (periodContract === "two") {
        if (tipContract === "Small") {
            sum2 = 8.58;
        } else if (tipContract === "Middle") {
            sum2 = 17.09;
        } else if (tipContract === "Large") {
            sum2 = 23.59;
        } else if (tipContract === "ExtraLarge") {
            sum2 = 31.79;
        }
    }
    if (mobileNet === "yes" && sum1 <= 10 && periodContract === "one") {
        sum1 += 5.50;
        console.log(`${(numMonts * sum1).toFixed(2)} lv.`)
    } else if (mobileNet === "yes" && sum1 <= 30 && periodContract === "one") {
        sum1 += 4.35;
        console.log(`${(numMonts * sum1).toFixed(2)} lv.`)
    } else if (mobileNet === "yes" && sum1 > 30 && periodContract === "one") {
        sum1 += 3.85;
        console.log(`${(numMonts * sum1).toFixed(2)} lv.`)
    } else if (mobileNet === "no" && periodContract === "one") {
        console.log(`${(numMonts * sum1).toFixed(2)} lv.`)
    }
    else if (mobileNet === "yes" && sum2 <= 10 && periodContract === "two") {
        sum2 += 5.50;
        let sum3 = numMonts * sum2;
        let finalSum = sum3 - (sum3 * 0.0375);
        console.log(`${(finalSum).toFixed(2)} lv.`)
    } else if (mobileNet === "yes" && sum2 <= 30 && periodContract === "two") {
        sum2 += 4.35;
        let sum3 = numMonts * sum2;
        let finalSum = sum3 - (sum3 * 0.0375);
        console.log(`${(finalSum).toFixed(2)} lv.`)
    } else if (mobileNet === "yes" && sum2 > 30 && periodContract === "two") {
        sum2 += 3.85;
        let sum3 = numMonts * sum2;
        let finalSum = sum3 - (sum3 * 0.0375);
        console.log(`${(finalSum).toFixed(2)} lv.`)
    } else if (mobileNet === "no" && periodContract === "two") {
        let sum3 = numMonts * sum2;
        let finalSum = sum3 - (sum3 * 0.0375);
        console.log(`${(finalSum).toFixed(2)} lv.`)
    }
}
mobile(["two", "Large", "no", 10])