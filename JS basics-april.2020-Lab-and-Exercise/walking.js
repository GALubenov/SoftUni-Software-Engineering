function solve(input) {
    let i = 0;
    let comm = input[i];
    let reqStep = 10000;
    let sum = 0;
    let chek = true;
    while (sum <= reqStep) {
        if (comm === "Going home") {
            i++;
            comm = Number(input[i]);
            sum += comm;
            if (sum >= reqStep) {
                console.log(`Goal reached! Good job!`);
                chek = false;
            } else {
                console.log(`${Math.abs(sum - reqStep)} more steps to reach goal.`);
                chek = false;
            }
            break;
        }
        sum += Number(comm);
        i++;
        comm = input[i];
    }
    if (chek) {
        console.log(`Goal reached! Good job!`)
    }
}
solve([1500, 3000, 250, 548, 100, "Going home", 5000])