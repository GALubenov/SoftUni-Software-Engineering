function naiMalko(input) {
    let n = Number(input[0]);
    let minNumber = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i <= n; i++) {
        let temp = Number(input[i]);
        if (temp < minNumber) {
            minNumber = temp;
        }
    }
    console.log(minNumber);
}
naiMalko([2, 99, 100]);