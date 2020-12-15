function solve(hE, minE, hA, minA) {

    let hours = hE - hA;
    let minutes = minE - minA;

    if (hours === 0) {
        console.log('On time');
        console.log(`${Math.abs(hours)}:${Math.abs(minutes)}`)

    } else if (hours < 0) {
        console.log('Late');
        console.log(`${Math.abs(hours)}:${Math.abs(minutes)}`)

    } else if (hours > 0) {
        console.log('Early');
        console.log(`${Math.abs(hours)}:${Math.abs(minutes)}`)
    }





}

solve(10, 15, 09, 20

)