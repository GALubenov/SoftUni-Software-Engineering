function solve(word, string) {

    let wordNew = word.toLowerCase();
    let stringNew = string.toLowerCase().split(' ');
     
    if (stringNew.includes(wordNew)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

solve('javascript', 'JavaScript is the best programming language')

solve('python', 'JavaScript is the best programming language')