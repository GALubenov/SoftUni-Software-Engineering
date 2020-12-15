function a(){
    for(let i = 1; i <= 5; i++){
        if(i == 2 || i == 3){
            continue;
            
        }console.log(i)
    }
    }
    a();
// намаляне от N до 1
function nestedLoops(args) {
    let input = Number(args[0]);
    for (let i = input; i >= 1; i--) {
        console.log("Namaleno do 1 " + i);
    }
}
nestedLoops([2])
//числата от 1 до N през 3
function solve(args) {
    let a = Number(args[0]);
    for (let i = 1; i <= a; i += 3) {
        console.log("Do N prez 3 " + i);
    }
}
solve([3])
// четни степени на 2
function odd(args) {
    let power = Number(args[0]);
    let a = 1;
    for (let i = 0; i <= power; i += 2) {
        console.log(a);
        a = a * 2 * 2;
    }
}
odd([10])