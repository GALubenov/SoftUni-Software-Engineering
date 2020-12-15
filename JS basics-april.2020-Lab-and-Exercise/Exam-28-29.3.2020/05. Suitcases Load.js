function solve(input) {
    let capacity = +input.shift();
    let i = 0;
    let comm = input[i];
    let flag = true;
    let dayCount = 1;

    while (comm !== 'End') {
        let suitcases = +input[i];
        if (dayCount % 3 === 0) {
            suitcases += (+input[i] * 0.1);
        }

        capacity -= suitcases;
        if (capacity < 0) {
            console.log("No more space!");
            flag = false;
            break;
        }
        dayCount++;
        i++;
        comm = input[i];
    }
    if (flag) {
        console.log("Congratulations! All suitcases are loaded!");
    }
    console.log(`Statistic: ${i} suitcases loaded.`);
}

solve(
    ['550', '100', '252', '72', 'End']
    //  [700.5, 180, 340.6, 126, 220]
    // [1200.2, 260, 380.5, 125.6, 305, 'End']
)