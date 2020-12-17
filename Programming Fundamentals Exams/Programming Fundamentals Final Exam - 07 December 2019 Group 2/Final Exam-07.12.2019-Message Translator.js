function solve(input) {
    let message = input.shift();

    let pattern = /!([A-Z][a-z]{2,})!:\[([A-Za-z]{8,})\]/g;
    // let pattern = /!([A-Z][a-z]{2,})!:\[([A-Za-z]{8,})\]/; // решение само с match() без глобал флага

    for (let line of input) {
        let matches = [...line.matchAll(pattern)][0];
       // let matches = line.match(pattern); // - подава се по този начин
        if (matches) {  // и в if проверката се подава if (matches !== null)
            let command = matches[1];
            let message = matches[2];
            let asciiSymbols = [...message]
            .map(s => s.charCodeAt(0))
            .join(' ');

            console.log(`${command}: ${asciiSymbols}`);
        } else {
        console.log('The message is invalid');
        }
    }
}

solve(
  //  [ '2', '!Send!:[IvanisHere]', '*Time@:[Itis5amAlready]' ]
    [
        '3',
        'go:[outside]',
        '!drive!:YourCarToACarWash',
        '!Watch!:[LordofTheRings]'
      ]
)