function seats(args) {
    let brTickets = Number(args[0]);
    let number = "";
    for (let i = 1; i <= brTickets; i++) {
        let comm = args[i];
        let brSimvoli = comm.length;
        let firstSimvol = comm.charCodeAt(0);
        if (brSimvoli == 4) {
            let first = "";
            let second = "";
            let third = "";
            for (let j = 0; j < 1; j++) {
                let word = comm;
                let simvolWord = word.charCodeAt(j);
                first = simvolWord;
                j++;
                simvolWord = word.charCodeAt(j);
                second = simvolWord;
                j++;
                simvolWord = word.charCodeAt(j);
                third = simvolWord;
                j++;
                simvolWord = word.charCodeAt(j);
                fourth = simvolWord;
                if (firstSimvol >= 65 && firstSimvol <= 90) {
                    console.log(`Seat decoded: ${String.fromCharCode(first)}${String.fromCharCode(second)}${String.fromCharCode(third)}`);
                } else {
                    console.log(`Seat decoded: ${String.fromCharCode(fourth)}${String.fromCharCode(second)}${String.fromCharCode(third)}`);
                }
            }
        } else if (brSimvoli == 5 || brSimvoli == 6) {
            let first = "";
            let second = "";
            for (let j = 0; j < 1; j++) {
                let word = comm;
                let simvolWord = word.charCodeAt(j);
                first = simvolWord;
                j++;
                simvolWord = word.charCodeAt(j);
                second = simvolWord;
                console.log(`Seat decoded: ${String.fromCharCode(first)}${second}`);
            }
        }
    }
}
seats([4,    "Y456",    "Y8909",    "Y8976",    "L3472",    ])