function solve(input) {
    //divide to the base (2) until 0 is reached an take the reminders in reversed order
    // 11 / 2 = 5 /остатък 1/ last digit; 5 / 2 = 2 /остатък 1->долепяме пред първия остатък 
    //и тн/; 2 / 2 = 1 /остатък 0/; 1 / 2 = 0 /остатък 1/; и подреждаме остатъците в обратен ред
    // = 1011;
    //или последователно делим входното число на базата 2 и долепяме получените остатъци в обратен ред
    let digit = Number(input);
    let result = '';
    while (digit > 0) {
        let reminder = digit % 2;
        console.log(reminder)
        result = reminder + result;
        
        digit = digit / 2;
        digit = Math.floor(digit);
    }
    console.log(result);
}

//solve(11)//binary -> 1011
//solve(71)//binary -> 1000111
solve(2)//binary -> 0010

