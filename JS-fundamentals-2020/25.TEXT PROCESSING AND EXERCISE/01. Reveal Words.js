function solve(words, template) {

    for (let word of words.split(', ')) {
        let string = '*'.repeat(word.length);

        if (template.includes(string)) {
            let index = template.indexOf(string);
            let firstPart = template.substring(0, index);
            let secondPart = template.substring(index + word.length);

            template = firstPart + word + secondPart;
        }
    }

    console.log(template)
}

solve('great', 'softuni is ***** place for learning new programming languages')

solve('great, learning', 'softuni is ***** place for ******** new programming languages')