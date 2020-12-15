function jump(args) {
    let wantedHigh = Number(args[0]);
    let viso4inaNaLetvata = wantedHigh - 30;
    let argsLength = (args.length) - 1;
    let brSkokove = 0;
    for (let i = 1; i <= argsLength; i++) {
        let brOpiti = 0;
        let skok = Number(args[i]);
        if (skok > viso4inaNaLetvata) {
            viso4inaNaLetvata += 5;
            brSkokove++;
        } else if (skok <= viso4inaNaLetvata) {
            for (let a = 1; a <= 3; a++) {
                if (skok > viso4inaNaLetvata) {
                    viso4inaNaLetvata += 5;
                    brSkokove++;
                    break;
                } else {
                    brSkokove++;
                    i++;
                    skok = Number(args[i]);
                    brOpiti++;
                }
            }
        } if (brOpiti == 3) {
            console.log(`Tihomir failed at ${viso4inaNaLetvata}cm after ${brSkokove} jumps.`);
            return;
        } else if (skok > wantedHigh) {
            console.log(`Tihomir succeeded, he jumped over ${wantedHigh}cm after ${brSkokove} jumps.`)
            return;
        }
    }
}
jump([231, 220, 240, 231, 228, 229, 230, 235, 245])