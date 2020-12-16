function solve(input) {
    //Write a function that counts the times each word occurs in a text. 
    //Print the words sorted by count in descending order. The input comes as an array of strings.
    let map = new Map()
    for (let i = 0; i < input.length; i++) {
        let word = input[i]

        if (!map.has(word)) {
            map.set(word, 1)
        } else {
            let count = map.get(word)
            map.set(word, count + 1)
        }
    }

    let sorted = [...map]
        .sort((a, b) => b[1] - (a[1]))

    for (let [word, count] of sorted) {
        console.log(`${word} -> ${count} times`)
    }
}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])