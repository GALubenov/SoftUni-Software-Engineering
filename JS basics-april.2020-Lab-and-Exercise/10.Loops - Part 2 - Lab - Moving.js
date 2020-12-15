function solve(input) {
    let lookingBook = input.shift();
    let numBooks = +input.shift();
    let i = 0;
    let count = 0;
    let flag = true;
    while (i < numBooks) {
        if (input[i] === lookingBook) {
            console.log(`You checked ${count} books and found it.`);
            flag = false;
            break;
        }
        count++;
        i++;
    }

    if (flag) {
        console.log(`The book you search is not here!`)
        console.log(`You checked ${count} books.`)
    }
}

solve(
    // [
    //      'Troy',
    //     8,
    //      'Stronger',
    //     'Life Style',
    //     'Troy'
    // ]

    //  [
    //      'The Spot',
    //      4,
    //      'Hunger Games',
    //      'Harry Potter',
    //      'Torronto',
    //      'Spotify'
    //  ]

    [
        'Bourne',
        32,
        'True Story',
        'Forever',
        'More Space',
        'The Girl',
        'Spaceship',
        'Strongest',
        'Profit',
        'Tripple',
        'Stella',
        'The Matrix',
        'Bourne'

    ]

)