function ddd(args) {
    let n = args[0];
    let l = args[1];
    let result = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            for (let k = 97; k < l + 97; k++) {
                for (let p = 97; p < 97 + l; p++) {
                    for (let o = 1; o <= n; o++) {
                        let firstChar = String.fromCharCode(k);
                        let secChar = String.fromCharCode(p);
                        if (o > i && o > j) {
                            result += `${i}${j}${firstChar}${secChar}${o} `
                        }
                    }
                }
            }
        }
    }
    console.log(result);
}
ddd([2, 4])

//второ решение
function par(args) {
    let n = Number(args[0]);
    let l = Number(args[1]);

    for (let a = 1; a <= n; a++) {
        for (let b = 1; b <= n; b++) {
            for (let c = 1; c <= l; c++) {
                for (let d = 1; d <= l; d++) {
                    for (let e = 1; e <= n; e++) {
                        let counter = e;
                        if (counter > a && counter > b){
                        console.log(`${a}${b}${String.fromCharCode(c + 96)}${String.fromCharCode(d + 96)}${counter}`)
                        }
                    }
                }
            }
        }
    }

}
par([2, 4])

