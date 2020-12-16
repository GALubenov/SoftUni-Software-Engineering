//не минава в джъдж заради това, че са подредени name, date, director, а не както ни идват разбъркано
function solve(input) {

    let movies = [];
    class Movie {
        constructor(name, date, director) {
            this.name = name;
            this.date = date;
            this.director = director;
        }
    }

    for (let line of input) {
        let tokens = line.split(' ')

        if (tokens.includes('addMovie')) {
            let movieName = tokens.slice(1).join(' ');
            movies.push(new Movie(movieName));

        } else if (tokens.includes('directedBy')) {
            let index = tokens.indexOf('directedBy');
            let movieName = tokens.slice(0, index).join(' ');
            let director = tokens.slice(index + 1).join(' ');

            for (let movie of movies) {
                let name = movie.name;

                if (movieName === name) {
                    movie.director = director
                }
            }

        } else if (tokens.includes('onDate')) {
            let index = tokens.indexOf('onDate');
            let movieName = tokens.slice(0, index).join(' ');
            let date = tokens.slice(index + 1).join(' ');

            for (let movie of movies) {
                let name = movie.name;

                if (movieName === name) {
                    movie.date = date;
                }
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