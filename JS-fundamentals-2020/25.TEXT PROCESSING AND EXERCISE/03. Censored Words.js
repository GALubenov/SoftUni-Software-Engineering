function solve(text, word) {

    let result = text.indexOf(word);

    while (result !== -1) {
        let index = text.indexOf(word)
        let first = text.substring(0, index);
        let second = text.substring(index + word.length);

        text = first + '*'.repeat(word.length) + second;
        result = text.indexOf(word);
    }

    console.log(text);
}

solve("A small sentence with some words", "small")