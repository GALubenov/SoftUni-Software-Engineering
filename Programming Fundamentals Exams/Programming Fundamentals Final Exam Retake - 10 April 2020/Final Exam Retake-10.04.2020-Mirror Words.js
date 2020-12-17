function solve(input) {
    let pattern = /#[A-z]{3,}##[A-z]{3,}#|@[A-z]{3,}@@[A-z]{3,}@/g;
    let pattern2 = /#{1,}|@{1,}/g;

    let matches = [...input[0].matchAll(pattern)];
   
    if (matches.length > 0) {
        console.log(`${matches.length} word pairs found!`);

        let mirrorWord = [];

        for (let line of matches) {
            let arr = line[0].split(pattern2)
            let firstWord = arr[1]
            let secondWord = arr[2].split('').reverse().join('');

            if (firstWord === secondWord) {
                mirrorWord.push(`${firstWord} <=> ${arr[2]}`);
            }
        }
        
        if (mirrorWord.length > 0) {
            console.log("The mirror words are:");
            console.log(mirrorWord.join(', '))
        } else {
            console.log("No mirror words!");
        }

    } else {
        console.log(`No word pairs found!`);
        console.log("No mirror words!");
    }
}

solve(
    // ['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']
    // [ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ]
    ['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']

)