function favorite(args) {
    let a1 = Number(args[0]);
    let a2 = Number(args[1]);
    let n = Number(args[2]);

    let simvol1 = "";
    let simvol2 = 0;
    let simvol3 = 0;
    let simvol4 = 0;

    for (let fisrt = a1; fisrt <= (a2 - 1); fisrt++) {
        simvol1 = String.fromCharCode(fisrt);

        for (let secondS = 1; secondS <= (n - 1); secondS++) {
            simvol2 = secondS;

            for (let thirdS = 1; thirdS <= ((n / 2) - 1); thirdS++) {

                simvol3 = thirdS;
                simvol4 = simvol1.charCodeAt();
                let sum = simvol2 + simvol3 + simvol4;
                if (fisrt % 2 != 0 && sum % 2 !=0) {
                    console.log(`${simvol1}-${simvol2}${simvol3}${simvol4}`);
                }
            }
        }
    }
}
favorite([71, 74, 6])