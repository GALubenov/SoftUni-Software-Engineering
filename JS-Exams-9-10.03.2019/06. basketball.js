function basketball(args) {
    let i = 0;
    let comm = args[i];
    let pointsDesi = 0;
    let pointsProtivnik = 0;
    let totalPoints = 0;
    let wins = 0;
    let lost = 0;
    let totalGames = 0;
    while (comm != "End of tournaments") {
        let nameTurnir = comm;
        i++;
        comm = Number(args[i]);
        let brGame = comm;
        let gameCounter = 0;
        for (let a = 1; a <= brGame; a++) {
            i++;
            comm = Number(args[i]);
            pointsDesi = comm;
            i++;
            comm = Number(args[i]);
            pointsProtivnik = comm;
            totalPoints = pointsDesi - pointsProtivnik;
            gameCounter++;
            if (pointsDesi > pointsProtivnik) {
                wins++;
                console.log(`Game ${gameCounter} of tournament ${nameTurnir}: win with ${totalPoints} points.`);
            } else {
                lost++;
                console.log(`Game ${gameCounter} of tournament ${nameTurnir}: lost with ${Math.abs(totalPoints)} points.`);
            }
        }
        totalGames += brGame;
        i++;
        comm = args[i];
    }
    console.log(`${((wins / totalGames)*100).toFixed(2)}% matches win`);
    console.log(`${((lost / totalGames) *100).toFixed(2)}% matches lost`); 
}
basketball(["Dunkers", 2, 75, 65, 56, 73, "Fire Girls", 3, 67, 34, 83, 98, 66, 45, "End of tournaments"])