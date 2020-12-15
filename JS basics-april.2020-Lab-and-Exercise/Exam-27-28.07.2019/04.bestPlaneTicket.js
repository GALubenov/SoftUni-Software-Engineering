function bestPlane(args) {
    let numberTicket = "";
    let price = 0;
    let prestoi = 0;
    let numberFlight = 0;
    let priceLv = 0;
    let hours = 0;
    let minute = 0;
    let bestPrestoi = Number.MAX_SAFE_INTEGER;

    let i = 0;
    let comm = args[i];
    while (comm !== "End") {
        let j = 1;
        while (j < 2) {
            numberTicket = args[i];
            i++;
            comm = args[i];
            price = Number(args[i]);
            i++;
            comm = args[i];
            prestoi = Number(args[i]);
            i++;
            comm = args[i];
            j++;
        }
        if (prestoi < bestPrestoi) {
            bestPrestoi = prestoi;
            numberFlight = numberTicket;
            priceLv = price * 1.96;
            hours = Math.floor(bestPrestoi / 60);
            minute = bestPrestoi % 60;
        }
    }
    console.log(`Ticket found for flight ${numberFlight} costs ${priceLv.toFixed(2)} leva with ${hours}h ${minute}m stay`);
}
bestPlane(["W64301",    60,    140,    "FR9967",    80,    200,    "FR0066",    45,    60,    "End"
]);