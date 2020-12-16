function solve(input) { // 100/100 judge
    let [first, second, third] = input[0].split('|');

    let thirdPatt = new RegExp()
    let capitalL = capitalLetter(first).join();
    let asciiAndLength = compare(second);
    thirdPart(asciiAndLength, capitalL, third);

    function thirdPart(arr, letter, string) {
        string = ' ' + string + ' ';
        
        for (let char of letter) {
            let index = arr.indexOf(char);
            
            if (index != -1) {
                let num = arr[index + 1];
                let regex = new RegExp(`\\s[${char}][^\\s]{${num}}\\s`, 'g');
                let match = regex.exec(string)
                
                if (match !== null) {
                    console.log(match[0])
                }
            }
        }
    }

    function compare(second) {
        let pattern = /(?<firstD>([0-9]{1,3})):(?<length>([0-9]{2}))/g;
        let match = pattern.exec(second);
        let result = [];
        while (match != null) {
            result.push(String.fromCharCode(match.groups.firstD));
            result.push(Number(match.groups.length));
            match = pattern.exec(second);
        }
        return result;
    }

    function capitalLetter(first) {
        let pattern = /([#$%*&])(?<capital>[A-Z]+)\1/g;
        let result = [];
        let matches = pattern.exec(first);
        while (matches != null) {
            result.push(matches.groups.capital)
            matches = pattern.exec(first);
        }
        return result;
    }
}

solve(['sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos'])
//solve(['Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig'])



