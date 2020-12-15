function solve(first, second, third) {
    first = +first;
    second = +second;
    third = +third;

    let time = first + second + third;

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }



}

solve('35', '45', '44')