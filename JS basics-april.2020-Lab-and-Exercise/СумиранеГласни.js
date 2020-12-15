function solve(args) {
    let s = args[0];
    let sum = 0;
    let a = 1;
    let e = 2;
    let i = 3;
    let o = 4;
    let u = 5;

    for (let d = 0; d <= s.length - 1; d++) {

        let temp = s[d];
        switch (temp) {
            case "a": sum += a;
                break;
            case "e": sum += e;
                break;
            case "i": sum += i;
                break;
            case "o": sum += o;
                break;
            case "u": sum += u;
                break;
            default: break;
        }
    }
    console.log(sum)
}
solve(["i"])