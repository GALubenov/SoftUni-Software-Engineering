function easter(args) {
    let cake = Number(args[0]);
    let egg = Number(args[1]);
    let bisq = Number(args[2]);
    let boq = (Number(args[1]) * 12) * 0.15;
    let total = (cake * 3.20) + (egg * 4.35) + (bisq * 5.40) + boq;
   
    console.log(total.toFixed(2));
}
easter([3, 2, 3])
