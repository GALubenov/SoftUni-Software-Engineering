function solve(input) {
    let day = +input.shift();
    let totalSum = 0;
    let winGames = 0;
    let loseGames = 0;
    let i = 0;
    let comm = input[i];

    for (let j = 1; j <= day; j++) {
        let daySum = 0;
        let winCounter = 0;
        let loseCounter = 0;
        while (comm !== 'Finish') {
            if (comm === 'win') {
                winCounter++;
                daySum += 20;
            } else if (comm === 'lose') {
                loseCounter++;
                daySum += 0;
            }

            i++;
            comm = input[i];
        }

        if (winCounter > loseCounter) {
            totalSum += daySum + (daySum * 0.1);
        } else {
            totalSum += daySum;
        }
        winGames += winCounter;
        loseGames += loseCounter;
        i++;
        comm = input[i];
    }

    if (winGames > loseGames) {
        totalSum = totalSum + (totalSum * 0.2);
        console.log(`You won the tournament! Total raised money: ${totalSum.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalSum.toFixed(2)}`);
    }
}

solve(
    // [2, 'volleyball', 'win', 'football', 'lose', 'basketball', 'win', 'Finish', 'golf', 'win', 'tennis', 'win', 'badminton', 'win', 'Finish',]
    [3,
        'darts', 'lose', 'handball', 'lose', 'judo', 'win', 'Finish',
        'snooker', 'lose', 'swimming', 'lose', 'squash', 'lose', 'table tennis', 'win', 'Finish',
        'volleyball', 'win', 'basketball', 'win', 'Finish']
)