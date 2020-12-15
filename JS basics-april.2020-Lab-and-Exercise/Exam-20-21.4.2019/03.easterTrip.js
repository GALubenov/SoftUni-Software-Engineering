function trip(args) {
    let destination = args[0];
    let date = args[1];
    let brNochtuvki = Number(args[2]);
    let sum = 0;

    if (destination === "Germany") {
        if (date === "21-23") {
            sum = brNochtuvki * 32;
        } if (date === "24-27") {
            sum = brNochtuvki * 37;
        } if (date === "28-31") {
            sum = brNochtuvki * 43;
        }
    } if (destination === "France") {
        if (date === "21-23") {
            sum = brNochtuvki * 30;
        } if (date === "24-27") {
            sum = brNochtuvki * 35;
        } if (date === "28-31") {
            sum = brNochtuvki * 40;
        }
    } if (destination === "Italy") {
        if (date === "21-23") {
            sum = brNochtuvki * 28;
        } if (date === "24-27") {
            sum = brNochtuvki * 32;
        } if (date === "28-31") {
            sum = brNochtuvki * 39;
        }
    }
    console.log(`Easter trip to ${destination} : ${sum.toFixed(2)} leva.`)
}
trip(["France", "28-31", 8])