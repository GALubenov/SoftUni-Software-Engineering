function red(num) {
    let n = num[0];
    let k = 1;
    while (k <= n) {
        console.log(k);
        k = (2 * k) + 1;
    }
}
red([9]);