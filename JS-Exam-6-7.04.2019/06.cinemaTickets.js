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
        if (comm == "End" || comm == "student" || comm == "standard" || comm == "kid" ) {
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
tickets(["Taxi", 4, "standard", "kid", "student", "End",
  "Scary Movie", 3, "student","student", "student","End",
         "Hero", 3, "kid", "kid","kid",
           "AZ", 2, "kid", "kid",
   "Finish"])