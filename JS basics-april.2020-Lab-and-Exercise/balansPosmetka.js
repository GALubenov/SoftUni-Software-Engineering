function balans(args) {
    let i = 1;
    let numberTrans = Number(args[0]);
    let acount = 0;
    let tempMoney = 0;

    while (i <= numberTrans) {
        tempMoney = Number(args[i]);
        if (tempMoney < 0) {
            console.log("Invalid operation")
            break;
        } else {
            console.log(`Your account balance was increased by: ${tempMoney.toFixed(2)}`);
            acount += tempMoney;
            i++;
        }
    }
    console.log(`Total balance: ${acount.toFixed(2)}`);
}
balans([3, 5.51, 69.42, 100]);