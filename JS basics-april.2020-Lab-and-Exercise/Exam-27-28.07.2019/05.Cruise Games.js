function test(args) {
    let name = args[0];
    let brIgri = Number(args[1]);
    let pointsVolleyball = 0;
    let totalPointsVolleyball = 0;
    let pointsTennis = 0;
    let totalPointsTennis = 0;
    let pointsBadminton = 0;
    let totalPointsBadminton = 0;
    let totalPoints = 0;
    let brIgriVolleyball = 0;
    let brIgriTennis = 0;
    let brIgriBadminton = 0;
    let i = 2;
    let comm = args[i];
    for (let a = 1; a <= brIgri; a++) {
        let j = 1;
        while (j <= 2) {
            if (comm == "volleyball") {
                brIgriVolleyball++;
                pointsVolleyball = Number(args[i + 1]);
                pointsVolleyball += (pointsVolleyball * 0.07);
                totalPointsVolleyball += pointsVolleyball;
            } if (comm == "tennis") {
                brIgriTennis++;
                pointsTennis = Number(args[i + 1]);
                pointsTennis += (pointsTennis * 0.05);
                totalPointsTennis += pointsTennis;
            } if (comm == "badminton") {
                brIgriBadminton++;
                pointsBadminton = Number(args[i + 1]);
                pointsBadminton += (pointsBadminton * 0.02);
                totalPointsBadminton += pointsBadminton;
            }
            i++;
            comm = args[i];
            j++;
        }
    }
    totalPoints = Math.floor(totalPointsVolleyball + totalPointsTennis + totalPointsBadminton);

    if (Math.floor(totalPointsVolleyball / brIgriVolleyball) >= 75 && Math.floor(totalPointsTennis / brIgriTennis) >= 75 && Math.floor(totalPointsBadminton / brIgriBadminton) >= 75) {
        console.log(`Congratulations, ${name}! You won the cruise games with ${totalPoints} points.`)
    } else {
        console.log(`Sorry, ${name}, you lost. Your points are only ${totalPoints}.`);
    }
}
test(["Ivan", 2, "volleyball", 70, "tennis", 80,])