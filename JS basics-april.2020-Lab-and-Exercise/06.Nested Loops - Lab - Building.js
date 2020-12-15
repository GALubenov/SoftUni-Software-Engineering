function solve(input) {
    let numFloor = +input[0];
    let numRooms = +input[1];

    for (let i = numFloor; i > 0; i--) {
        let print = '';
        for (let j = 0; j < numRooms; j++) {
            if (i === numFloor) {
                print += `L${i}${j} `
            } else if (i % 2 === 0) {
                print += `O${i}${j} `
            } else {
                print += `A${i}${j} `
            }
        }
        console.log(print);
    }
}

solve([6, 4])