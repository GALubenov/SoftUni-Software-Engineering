function savings (args){
let dohod = Number(args[0]);
let brMonths = Number (args[1]);
let li4niRazhodi = Number (args[2]);

let nepredvideniRazhodi = dohod * 0.30;
let saveForMonth = dohod - li4niRazhodi - nepredvideniRazhodi;
let procentOtDohoda = (saveForMonth / dohod) * 100;
let totalSaveMoney = saveForMonth * brMonths;

console.log(`She can save ${procentOtDohoda.toFixed(2)}%`);
console.log(`${totalSaveMoney.toFixed(2)}`);

}
savings ([1500,    3,    800    ])