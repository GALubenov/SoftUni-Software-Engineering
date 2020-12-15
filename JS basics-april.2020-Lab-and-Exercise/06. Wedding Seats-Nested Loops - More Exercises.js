function solve(args) {
    let numSectors = args[0].charCodeAt(0);
    let numRow = Number(args[1]);
    let brMestaNe4etni = Number(args[2]);
    let result = 0;

    for (let i = 65; i <= numSectors; i++) {
        let sector = i;

        for (let j = 1; j <= numRow; j++) {
            let row = j;
            let numSeats = Number(args[2]);
            let seats = 97;
            if (row % 2 == 0) {
                numSeats += 2;
            }

            for (let si = 1; si <= numSeats; si++) {
                console.log(`${String.fromCharCode(sector)}${row}${String.fromCharCode(seats)}`);
                result++;
                seats++
            }
        }
         numRow++;
    }
    console.log(result)
}

solve([
    "B", 3, 2
]);