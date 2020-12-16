function solve(input) {
    let template = input.shift().split(' ');
    let obj = {};
    for (let word of template) {
    
        if (!obj.hasOwnProperty(word)) {
            obj[word] = [];
        }

        obj[word] = 0;
    }

    for (let line of input) {
        if (obj.hasOwnProperty(line)) {
            obj[line] += 1;
        }
    }

    let sorted = Object.entries(obj);
    sorted.sort((a, b) => b[1] - a[1]);
    for (let [word, num] of sorted) {
        console.log(`${word} - ${num}`);
    }
}

solve([
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ]
    )