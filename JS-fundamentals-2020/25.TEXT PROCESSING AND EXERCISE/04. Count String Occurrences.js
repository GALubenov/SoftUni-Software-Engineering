function solve(text, word) {
    let occur = text.split(' ').filter(c => c === word);
    console.log(occur.length);
}

solve("This is a word and it also is a sentence", "is")
//second solve
function solve2(text, word) {

    let matcher = ` ${word} `;
    text = ` ${text} `;
    let index = text.indexOf(matcher);
    let count = 0;

    while (index !== -1) {
        count++;

        index = text.indexOf(matcher, index + 1);
    }

    console.log(count);
}

solve2("This is a word and it also is a sentence", "is");