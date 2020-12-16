function solve(input) {
    let regex = /([@#])(?<word1>[A-Za-z]{3,})\1{2}(?<word2>[A-Za-z]{3,})\1/g;
    let text = input[0];
    let arr = [];
    let validPairWords = 0;
    let validMirrorWords = false;

    let match = regex.exec(text);
    while (match != null) {
        validPairWords++;
        let wordOne = match.groups.word1;
        let wordTwo = match.groups.word2;
        let reversedWordTwo = wordTwo.split('').reverse().join('');
        if (wordOne === reversedWordTwo) {
            validMirrorWords = true;
            arr.push(`${wordOne} <=> ${wordTwo}`);
        }
        match = regex.exec(text);
    }

    if (validPairWords > 0) {
        console.log(`${validPairWords} word pairs found!`);
        if (validMirrorWords) {
            console.log("The mirror words are:");
            console.log(arr.join(', '));
        } else {
        console.log("No mirror words!");           
        }
    } else {
        console.log("No word pairs found!");
        console.log("No mirror words!");
    }
}

solve(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])
solve(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'])
solve(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])

