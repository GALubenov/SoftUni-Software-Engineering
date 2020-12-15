function bakeri(args) {

let priceBra6no = Number(args[0]);
let brKgBra6no = Number(args[1]);
let brKgSugar = Number(args[2]);
let brKoriEggs = Number(args[3]);
let brMaq = Number(args[4]);

let priceSugar = priceBra6no * 0.75;
let priceKori = priceBra6no * 1.1;
let priceMaq = priceSugar * 0.2;

let sumBra6no = brKgBra6no * priceBra6no;
let sumSugar = brKgSugar * priceSugar;
let sumeggs = brKoriEggs * priceKori;
let sumMaq = brMaq * priceMaq;

console.log((sumBra6no + sumSugar+ sumeggs + sumMaq).toFixed(2));

}
bakeri([50, 10, 3.5, 6, 1])