function favorite(args) {
    let bestAsciiSum = Number.MIN_SAFE_INTEGER;
    let bestMovie = "";
    let i = 0;
    let comm = args[i];
    let movieCounter = 1;
    while (comm != "STOP") {
        let nameMovie = args[i];
        let nameLength = nameMovie.length;
        let asciiSum = 0;
        for (let a = 0; a < nameLength; a++) {
            let characterInName = nameMovie.charCodeAt(a);
            if (characterInName >= 65 && characterInName <= 90) {
                asciiSum += characterInName - nameLength;
            }
            else if (characterInName >= 97 && characterInName <= 122) {
                asciiSum += characterInName - (nameLength * 2);
            } else {
                asciiSum += characterInName;
            }
        }
        if (asciiSum > bestAsciiSum) {
            bestAsciiSum = asciiSum;
            bestMovie = nameMovie;
        }
        i++;
        comm = args[i];
        movieCounter++;
        if (movieCounter == 7) {
            console.log(`The limit is reached.`);
            break;
        }
    }
    console.log(`The best movie for you is ${bestMovie} with ${bestAsciiSum} ASCII sum.`);
}
favorite(["Wrong turn", "The maze", "Area 51", "Night Club", "Ice age", "Harry Potter", "Wizards"])