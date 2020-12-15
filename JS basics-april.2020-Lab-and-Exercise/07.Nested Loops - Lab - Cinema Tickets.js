function solve(input) {
    let standard = 0;
    let student = 0;
    let kid = 0;
    let i = 0;
    let command = input[i];

    while (command !== 'Finish') {
        let movieName = input[i];
        i++;
        let numSeats = +input[i];
        i++;
        command = input[i];
        let count = 0;
        while (command == 'standard' || command == 'student' || command == 'kid') {
            if (count === numSeats) {
                break;
            }

            if (command === 'standard') {
                standard++;
            } else if (command === 'student') {
                student++;
            } else if (command === 'kid') {
                kid++;
            }

            count++;
            i++;
            command = input[i];
        }

        if (command == 'End') {
            i++;
        }

        console.log(`${movieName} - ${((count / numSeats) * 100).toFixed(2)}% full.`);

        command = input[i];
    }

    let totalTickets = standard + student + kid;
    console.log(`Total tickets: ${totalTickets}`)
    console.log(`${((student / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standard / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kid / totalTickets) * 100).toFixed(2)}% kids tickets.`);
}

solve( // ['Taxi', 10, 'standard', 'kid', 'student', 'student', 'standard', 'standard', 'End', 'Scary Movie', 6, 'student', 'student', 'student', 'student', 'student', 'student', 'Finish']
    ['The Matrix', 20, 'student', 'standard', 'kid', 'kid', 'student', 'student', 'standard', 'student', 'End',
        'The Green Mile', 17, 'student', 'standard', 'standard', 'student', 'standard', 'student', 'End',
        'Amadeus', 3, 'standard', 'standard', 'standard', 'Finish'])

function tickets(args) {
    let nameOfMovie = "";
    let brMesta = 0;
    let studentT = 0;
    let standartT = 0;
    let kidT = 0;
    let totalTickets = 0;
    let i = 0;
    let command = args[i];
    while (command != "Finish") {
        nameOfMovie = args[i];
        i++;
        brMesta = Number(args[i]);
        i++;
        let comm = args[i];
        let tickets = 0;
        while (comm == "student" || comm == "standard" || comm == "kid") {
            if (tickets >= brMesta) {
                break;
            }
            if (comm == "student") {
                studentT++;
            } else if (comm == "standard") {
                standartT++;
            } else if (comm == "kid") {
                kidT++;
            }
            tickets++;
            i++;
            comm = args[i];
        }
        if (comm == "End" || comm == "student" || comm == "standard" || comm == "kid") {
            i++;
        }
        totalTickets += tickets;
        console.log(`${nameOfMovie} - ${(Number(tickets / brMesta) * 100).toFixed(2)}% full.`);
        command = args[i];
    }
    console.log(`Total tickets: ${Number(totalTickets)}`);
    console.log(`${(Number(studentT / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${(Number(standartT / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(Number(kidT / totalTickets) * 100).toFixed(2)}% kids tickets.`);
}