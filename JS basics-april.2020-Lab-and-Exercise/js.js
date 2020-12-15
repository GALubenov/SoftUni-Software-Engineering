function solve(input) {
    let numberOfParticipant = Number(input.shift());
   
    let counterAll = 0;
    let forCharity = 0;

    for (let i = 1; i <= numberOfParticipant; i++) {
        let name = input.shift();
        let type = input.shift();

        let pаrticipantCookies = 0;
        let participantCakes = 0;
        let participentWaffles = 0;

        while (type !== "Stop baking!") {
            let numberOftype = Number(input.shift());
            
            counterAll += numberOftype

            if (type === "cookies") {
                pаrticipantCookies += numberOftype;
            }
            else if (type === "cakes") {
                participantCakes += numberOftype;
            }
            else if (type === "waffles") {
                participentWaffles += numberOftype;
            }

            type = input.shift();

            if (type == "Stop baking!"){
                console.log(`${name} baked ${pаrticipantCookies} cookies, ${participantCakes} cakes and ${participentWaffles} waffles.`)
                forCharity += pаrticipantCookies * 1.50 + participantCakes * 7.80 + participentWaffles * 2.30
            }
        }
    }
    console.log(`All bakery sold: ${counterAll}`)
    console.log(`Total sum for charity: ${forCharity.toFixed(2)} lv.`)
}
solve(
    //  [3, 'Iva', 'cookies', 5, 'cakes', 3, 'Stop baking!','George', 'cakes', 7, 'waffles', 2, 'Stop baking!','Ivan', 'cookies', 6, 'Stop baking!']
    //    [2, 'Annie', 'cakes', 3, 'waffles', 6, 'cookies', 2, 'Stop baking!', 'Petya', 'waffles', 8, 'Stop baking!']
    [3, 'George', 'cookies', '10', 'Stop baking!',
        'Annie', 'waffles', 8, 'Stop baking!',
        'Ivan', 'cookies', 6, 'waffles', 3, 'Stop baking!',]
);