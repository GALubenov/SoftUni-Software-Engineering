function solve(args) {
    let passenger = Number(args[0]);
    let busStop = Number(args[1]);
    let index = 2;

    for (let i = 1; i <= busStop; i++) {

        let passengerOut = Number(args[index]);
        passenger -= passengerOut;
        index++;
        let passengerIn = Number(args[index]);
        passenger += passengerIn;
        index++;

        if (i % 2 != 0) {
            passenger +=2;
        }else{
            passenger -=2;
        }
    }
    console.log(`The final number of rassengers is: ${passenger}.`)  
}
solve([20, 2, 10, 5, 5, 3]);