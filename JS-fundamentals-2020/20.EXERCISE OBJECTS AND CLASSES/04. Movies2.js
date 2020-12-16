function solve(input) {

    let movies = [];

    for (let line of input) {
        let tokens = line.split(' ');

        if (tokens.includes('addMovie')) {
            let movieName = tokens.slice(1).join(' ');
            movies.push({ name: movieName })

        } else if (tokens.includes('directedBy')) {
            let index = tokens.indexOf('directedBy');
            let movieName = tokens.slice(0, index).join(' ');
            let director = tokens.slice(index + 1).join(' ');

            let findMovie = movies.find(x => x.name === movieName)
            if (findMovie) {
                findMovie.director = director;
            }

        } else if (tokens.includes('onDate')) {
            let index = tokens.indexOf('onDate');
            let movieName = tokens.slice(0, index).join(' ');
            let date = tokens.slice(index + 1).join(' ');

            let findMovie = movies.find(x => x.name === movieName)
            if (findMovie) {
                findMovie.date = date;
            }
        }
    }

    for (let movie of movies) {
        if (movie.director !== undefined && movie.name !== undefined && movie.date !== undefined) {
            console.log(JSON.stringify(movie));
        }
    }
}

solve(
    [
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
    ]

)