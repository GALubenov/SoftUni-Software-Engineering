function voucher(args) {
    let sumVoucher = Number(args[0]);
    let i = 1
    let counter = args[i];
    let sumOfPokupka = 0;
    let brPokupki = 0;
    let brBileti = 0;

    while (counter != "End") {
        if (counter.length > 8) {
            sumOfPokupka = counter.charCodeAt(0) + counter.charCodeAt(1)
            if (sumOfPokupka <= sumVoucher) {
                brBileti++;
            }
        }
        else if (counter.length <= 8) {
            sumOfPokupka = counter.charCodeAt(0);
            if (sumOfPokupka <= sumVoucher) {
                brPokupki++;
            }
        }
        if (sumOfPokupka <= sumVoucher) {
            sumVoucher -= sumOfPokupka;
            leftSum = sumVoucher - sumOfPokupka;
        }
        else if (sumOfPokupka > sumVoucher) {
            break;
        }
        i++;
        counter = args[i];
    }
    console.log(brBileti)
    console.log(brPokupki)
}

voucher([300,
    "Captain Marvel",
    "popcorn",
    "Pepsi"

])