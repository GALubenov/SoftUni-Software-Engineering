//алгоритъм на Евклид за най голям общ делител
function solve(args) {
    let a = args[0];
    let b = args[1];
    while (b !== 0) {
        let oldB = b;
        b = a % b;
        a = oldB;
    } console.log(a)
}
solve([24, 16])
//или второ решение
function second(args) {
    let c = args[0];
    let d = args[1];
    while (c % d !== 0) {
        let temp = c % d;
        c = d;
        d = temp;
    } console.log(d)
}
second([600, 136])