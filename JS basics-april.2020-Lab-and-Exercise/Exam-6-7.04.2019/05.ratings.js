function ratings(args) {
    let brFilmi = Number(args[0]);
    let rating = 0;
    let nameOfMovie = 0;
    let nameMovieMaxRating = 0;
    let nameMovieMinRating = 0;
    let maxRating = Number.MIN_SAFE_INTEGER;
    let minRating = Number.MAX_SAFE_INTEGER;
    let averageRating = 0;
    let counter = 1;

    for (let i = 1; i <= brFilmi; i++) {
        nameOfMovie = args[counter];
        counter++;
        rating = Number(args[counter]);
        counter++;
        if (rating > maxRating) {
            maxRating = rating;
            nameMovieMaxRating = nameOfMovie;
        } else if (rating < minRating) {
            minRating = rating;
            nameMovieMinRating = nameOfMovie;
        }
        averageRating += rating;
    }
    console.log(`${nameMovieMaxRating} is with highest rating: ${maxRating.toFixed(1)}`);
    console.log(`${nameMovieMinRating} is with lowest rating: ${minRating.toFixed(1)}`);
    console.log(`Average rating: ${(averageRating / brFilmi).toFixed(1)}`);
}

ratings([3,
    "Interstellar",
    8.5,
    "Dangal",
    8.3,
    "Green Book",
    8.2
    ])