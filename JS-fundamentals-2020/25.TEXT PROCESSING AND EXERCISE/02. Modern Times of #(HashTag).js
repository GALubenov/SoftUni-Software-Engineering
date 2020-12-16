function solve(string) {

    let arr = string.split(' ');
    for (let word of arr) {
        if (word.includes('#') && word.length > 1) {
            word = word.split('#');
            let flag = true;
            let result = word[1].split('');
            for (let symbol of result) {
                let char = symbol.charCodeAt();
                //65-90; 97-122

                if (char < 65 || char > 90 && char < 97 || char > 122) {
                    flag = false;
                    break;
                } 
            }

            if (flag) {
                console.log(result.join(''));
            }
        }
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')