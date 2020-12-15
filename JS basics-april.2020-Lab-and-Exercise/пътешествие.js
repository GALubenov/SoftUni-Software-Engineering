function pyteshestvie(input) {
    let budget = Number(input[0]);
    let season = input[1];

    if (season === "summer") {
        if (budget <= 100) {
            console.log("Destination: Bulgaria")
            console.log("Camp: price " + (budget * 0.30).toFixed(2) + " lv.")
        } else if (budget <= 1000) {
            console.log("Destination: Balkans")
            console.log("Camp: price " + (budget * 0.40).toFixed(2) + " lv.")
        }

    } else if (season === "winter") {
        if (budget <= 100) {
            console.log("Destination: Bulgaria")
            console.log("Hotel: price " + (budget * 0.70).toFixed(2) + " lv.")

        } else if (budget <= 1000) {
            console.log("Destination: Balkans")
            console.log("Hotel: price " + (budget * 0.80).toFixed(2) + " lv.")
        }

    } if (budget > 1000) {
        console.log("Destination: Europe")
        console.log("Hotel: price " + (budget * 0.90).toFixed(2) + " lv.")
    }

}
pyteshestvie([1500, "summer"]);