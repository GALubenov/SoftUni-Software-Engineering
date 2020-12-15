function seats(args) {
    let sector = args[0];
    let redove = Number(args[1]);
    let brMestaNe4etni = Number(args[2]);
    let counter = 0;
    let n = sector.charCodeAt(0)
    let firstSector = 0;
    for (let ei = 65; ei <= n; ei++) {
        firstSector = ei;
        for (let bi = 1; bi <= redove; bi++) {
            let chr = 97;
            let mesta = Number(args[2]);
            if (bi % 2 == 0) {
                mesta += 2;
            }
            for (let si = 1; si <= mesta; si++) {
                console.log(`${String.fromCharCode(firstSector)}${bi}${String.fromCharCode(chr)}`);
                counter++;
                chr++
            }
        }
        redove++;
    }
    console.log(counter)

}
seats(["B", 3, 2 ])