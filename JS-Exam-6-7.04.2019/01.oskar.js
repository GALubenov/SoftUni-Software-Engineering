function oskar(args){
let naem = Number(args[0]);
let statue = naem - (naem * 0.30);
let ketering = statue - (statue *0.15);
let sound = ketering - (ketering /2);
console.log((naem + statue + ketering + sound).toFixed(2))
}
oskar([3500])