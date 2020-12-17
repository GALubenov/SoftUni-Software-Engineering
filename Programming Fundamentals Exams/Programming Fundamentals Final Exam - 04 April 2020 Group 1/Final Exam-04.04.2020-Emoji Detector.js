function solve(input) {
    let pattern1 = /\*{2,2}[A-Z][a-z]{2,}\*{2,2}|:{2,2}[A-Z][a-z]{2,}:{2,2}/g;
    let pattern2 = /[0-9]{1,}/g;

    let matchValidEmoji = input[0].match(pattern1);
    let arrOfNumber = input[0].match(pattern2);

    let coolThreshold = 1;
    for (let i = 0; i < arrOfNumber.length; i++) {
        for (let j = 0; j < arrOfNumber[i].length; j++) {
            coolThreshold *= Number(arrOfNumber[i][j]);
        }
    }

    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${matchValidEmoji.length} emojis found in the text. The cool ones are:`);

    for (let line of matchValidEmoji) {
        let name = line.substring(2, line.length - 2);
        let ascii = [...name].map(s => s.charCodeAt());
        let sumOfAscii = 0;
        for (let num of ascii) {
            sumOfAscii += num;
        }

        if (sumOfAscii > coolThreshold) {
            console.log(line)
        }
    }
}

solve
    (['In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'])

 //(['5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::'])

// (["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])