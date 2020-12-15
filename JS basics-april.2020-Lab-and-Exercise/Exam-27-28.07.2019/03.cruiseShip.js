function cruise(args) {
    let vidCruise = args[0];
    let vidKayuta = args[1];
    let brNo6tuvki = Number(args[2]);

    let sum = 0;

    if (vidCruise == "Mediterranean") {
        if (vidKayuta == "standard cabin") {
            sum = 4 * brNo6tuvki * 27.50;
        } else if (vidKayuta == "cabin with balcony") {
            sum = 4 * brNo6tuvki * 30.20;
        } else if (vidKayuta == "apartment") {
            sum = 4 * brNo6tuvki * 40.50;
        }
    } else if (vidCruise == "Adriatic") {
        if (vidKayuta == "standard cabin") {
            sum = 4 * brNo6tuvki * 22.99;
        } else if (vidKayuta == "cabin with balcony") {
            sum = 4 * brNo6tuvki * 25.00;
        } else if (vidKayuta == "apartment") {
            sum = 4 * brNo6tuvki * 34.99;
        }
    } else if (vidCruise == "Aegean"){
        if (vidKayuta == "standard cabin") {
            sum = 4 * brNo6tuvki * 23.00;
        } else if (vidKayuta == "cabin with balcony") {
            sum = 4 * brNo6tuvki * 26.60;
        } else if (vidKayuta == "apartment") {
            sum = 4 * brNo6tuvki * 39.80;
        }
    }
    if (brNo6tuvki > 7){
        sum = sum - (sum * 0.25);
    }
    console.log(`Annie's holiday in the ${vidCruise} sea costs ${sum.toFixed(2)} lv.`)
}
cruise([
    "Adriatic",
"apartment",
5


])