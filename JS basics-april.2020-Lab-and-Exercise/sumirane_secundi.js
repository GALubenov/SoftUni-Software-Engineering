function sum(input) {
    let a = input[0];
    let b = input[1];
    let c = input[2];
    let seconds = a + b + c;
    
    let min = 0;
    if (seconds > 59) {
        min++; seconds = seconds - 60;
    } if (seconds < 10) {
        console.log(min + ":" + "0" + seconds);
    } else {
        console.log(min + ":" + seconds);
    }
}
sum([2, 2, 1]);

