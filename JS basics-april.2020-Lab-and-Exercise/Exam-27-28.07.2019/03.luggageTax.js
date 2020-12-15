function tax(args) {
    let width = Number(args[0]);
    let high = Number(args[1]);
    let lenth = Number(args[2]);
    let priorityTicket = args[3];
    let obem = width * high * lenth;
    let luggageTax = 0;
    if (obem <= 50) {
        luggageTax = 0;
    } else if (obem > 50 && obem <= 100) {
        if (priorityTicket == "true") {
            luggageTax = 0;
        }else if (priorityTicket == "false"){
            luggageTax = 25;
        }
    } else if (obem > 100 && obem <= 200) {
        if (priorityTicket == "true") {
            luggageTax = 10;
        }else if (priorityTicket == "false"){
            luggageTax = 50;
        }
    } else if (obem > 200 && obem <= 300) {
        if (priorityTicket == "true") {
            luggageTax = 20;
        }else if (priorityTicket == "false"){
            luggageTax = 100;
        }
    }
    console.log (`Luggage tax: ${luggageTax.toFixed(2)}`);
}
tax([5, 7, 7, "false"])