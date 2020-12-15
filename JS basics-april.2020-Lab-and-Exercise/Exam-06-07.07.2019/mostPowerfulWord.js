function powerful(args) {
    let i = 0;
    let comm = args[i];
    let maxPoints = Number.MIN_SAFE_INTEGER;
    let powerfulWord = "";

    while (comm !== "End of words") {
        let word = comm;
        let sumAscii = 0;
        let firstCharWord = word.charCodeAt(0);
        for (let a = 0; a < word.length; a++) {
            let charOfWord = comm;
            let numCharOfWord = charOfWord.charCodeAt(a);
            sumAscii += numCharOfWord;
        }
        if (firstCharWord == 97 || firstCharWord == 101 || firstCharWord == 105 || firstCharWord == 111 || firstCharWord == 117 || firstCharWord == 121
            || firstCharWord == 65 || firstCharWord == 69 || firstCharWord == 73 || firstCharWord == 79 || firstCharWord == 85 || firstCharWord == 89) {
            sumAscii = sumAscii * word.length;
        }else{
            sumAscii = Math.floor(sumAscii / word.length); 
        }
        if (sumAscii > maxPoints){
            maxPoints = sumAscii;
            powerfulWord = word;
        }  
        i++;
        comm = args[i];
    }
 console.log(`The most powerful word is ${powerfulWord} - ${maxPoints}`)

}
powerful(["But",
"Some",
"People",
"Say",
"It's",
"LOVE",

"End of words"]);