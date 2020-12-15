function cinema(args) {
    let nameOfMovie = args[0];
    let vidZala = args[1];
    let brBileti = Number(args[2]);
    let sum = 0;

    if (nameOfMovie == "A Star Is Born") {
        switch (vidZala) {
            case "normal": sum = brBileti * 7.5; console.log(`${nameOfMovie} -> ${sum.toFixed(2)} lv.`); break;
            case "luxury": sum = brBileti * 10.5; console.log(`${nameOfMovie} -> ${sum.toFixed(2)} lv.`); break;
            case "ultra luxury": sum = brBileti * 13.5; console.log(`${nameOfMovie} -> ${sum.toFixed(2)} lv.`); break;
        }
    } else if (nameOfMovie == "Bohemian Rhapsody") {
        switch (vidZala) {
            case "normal": sum = brBileti * 7.35; console.log(`${nameOfMovie} -> ${sum.toFixed(2)} lv.`); break;
            case "luxury": sum = brBileti * 9.45; console.log(`${nameOfMovie} -> ${sum.toFixed(2)} lv.`); break;
            case "ultra luxury": sum = brBileti * 12.75; console.log(`${nameOfMovie} -> ${sum.toFixed(2)} lv.`); break;
        }
    } else if (nameOfMovie == "Green Book") {
        switch (vidZala) {
            case "normal": sum = brBileti * 8.15; console.log(`${nameOfMovie} -> ${sum.toFixed(2)} lv.`); break;
            case "luxury": sum = brBileti * 10.25; console.log(`${nameOfMovie} -> ${sum.toFixed(2)} lv.`); break;
            case "ultra luxury": sum = brBileti * 13.25; console.log(`${nameOfMovie} -> ${sum.toFixed(2)} lv.`); break;
        }
    } else if (nameOfMovie == "The Favourite") {
        switch (vidZala) {
            case "normal": sum = brBileti * 8.75; console.log(`${nameOfMovie} -> ${sum.toFixed(2)} lv.`); break;
            case "luxury": sum = brBileti * 11.55; console.log(`${nameOfMovie} -> ${sum.toFixed(2)} lv.`); break;
            case "ultra luxury": sum = brBileti * 13.95; console.log(`${nameOfMovie} -> ${sum.toFixed(2)} lv.`); break;
        }
    }



}
cinema(["Green Book",
    "normal",
    63
    
])