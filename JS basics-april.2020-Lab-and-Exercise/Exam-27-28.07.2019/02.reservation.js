function reservation(args) {

    let reservationDay = Number(args[0]);
    let reservationMonth = Number(args[1]);
    let nastanqvaneDay = Number(args[2]);
    let nastanqvaneMonth = Number(args[3]);
    let leftDay = Number(args[4]);
    let leftMonth = Number(args[5]);

    let brNo6tuvki = leftDay - nastanqvaneDay;

    let day = Math.abs(reservationDay - nastanqvaneDay);
    let totalPrice = 0;

    if (day > 10) {
        totalPrice = brNo6tuvki * 25;
    } else if (reservationMonth < nastanqvaneMonth) {
        totalPrice = (brNo6tuvki * 25) - ((brNo6tuvki * 25) * 0.20);
    } else {
        totalPrice = brNo6tuvki * 30;
    }
    console.log(`Your stay from ${nastanqvaneDay}/${nastanqvaneMonth} to ${leftDay}/${leftMonth} will cost ${totalPrice.toFixed(2)}`);
}
reservation([5, 4, 15, 5, 18, 5])