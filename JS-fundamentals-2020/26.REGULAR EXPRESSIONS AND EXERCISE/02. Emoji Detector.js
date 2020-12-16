function solve(input) {
    let text = input[0];
    let matches = text.matchAll(/(?<start>::|\*\*)(?<emoji>[A-Z][a-z]{2,})(\k<start>)/g);
    let coolTreshold = calculateTreshold(text.match(/[0-9]/g));
    let coolnesEmoji = [];
    let count = 0;

    for (let match of matches) {

        if (match) {
            let emoji = match.groups.emoji;
            let coolnes = calculateCoolnesEmoji(emoji);

            if (coolnes >= coolTreshold) {
                coolnesEmoji.push(match[0])
            } else {
                count++;
            }
        }
    }

    console.log(`Cool threshold: ${coolTreshold}`);
    console.log(`${(count + coolnesEmoji.length)} emojis found in the text. The cool ones are:`);
    if (coolnesEmoji.length > 0) {
        console.log(coolnesEmoji.join('\n'));
    }

    function calculateCoolnesEmoji(emoji) {
        let result = 0;
        for (let char of emoji.split('')) {
            result += char.charCodeAt();
        }
        return result;
    }

    function calculateTreshold(arr) {
        let result = 1;

        for (let digit of arr) {
            result *= Number(digit);
        }

        return result;
    }
}

solve(
    [
        'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
    ]
)