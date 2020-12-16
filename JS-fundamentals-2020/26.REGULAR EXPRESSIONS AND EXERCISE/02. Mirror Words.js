function solve(input) {
    let text = input.shift();
    let pattern = /([@#])(?<firstWord>[A-Za-z]{3,})\1{2}(?<secondWord>[A-Za-z]{3,})\1/g;
    // понеже exec e regex метод затова върху патерна извикваме exec и му подаваме текста text
    //резултата запазваме в променлива и работим  с него
    let match = pattern.exec(text); // връща ни първата двойка, както и възможността за работа с групи
    // затова го завъртаме в цикъл
    let counter = 0;
    let mirorWord = [];
    while (match) {
        counter++;
        // поради това, че ще работим с групи в патерна добавяме () и дефинираме групите
        // и използваме oject destructuring sintaxis, понеже групите са обекти
        let { firstWord, secondWord } = match.groups;
        let reversedFirstWord = firstWord.split('').reverse().join('');
        if (reversedFirstWord === secondWord) {
            // единият вариант е в масива да пушваме, обект с кей към велю -> mirorWord.push({firstWord, secondWord})
            // и извън цикъла разпечатваме с forof() или
           mirorWord.push(`${firstWord} <=> ${secondWord}`);
        }

        match = pattern.exec(text);
    }

    if (counter < 1) {
        console.log("No word pairs found!");
    } else {
        console.log(`${counter} word pairs found!`);
    }

    if (mirorWord.length < 1) {
        console.log("No mirror words!");
    } else {
        console.log("The mirror words are:");
        console.log(mirorWord.join(', '));
    }
}

solve(
   // [        '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']
    [ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ]
)