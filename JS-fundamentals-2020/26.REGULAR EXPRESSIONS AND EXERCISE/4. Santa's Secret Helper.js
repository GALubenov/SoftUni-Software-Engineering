function solve(input) {
    let key = Number(input.shift());
    let pattern = /@(?<name>[A-Za-z]+)[^@\-!:>]+!(?<beh>[GN])!/;

    let line = input.shift();
    while (line != 'end') {
        let message = decryptString(line, key);
        let matches = message.match(pattern);
        if (matches != null) {
            let name = matches.groups.name;
            let behavior = matches.groups.beh;

            if (behavior === 'G') {
                console.log(name);
            }
        }
        line = input.shift();
    }

    function decryptString(string, decryptonKey) {
        let result = '';
        for (let i = 0; i < string.length; i++) {
            result += String.fromCharCode(string[i].charCodeAt() - decryptonKey);
        }
        return result;
    }
}

solve(['3', 'CNdwhamigyenumje$J$', 'CEreelh-nmguuejnW$J$', 'CVwdq&gnmjkvng$Q$', 'end'])
//solve(['3', "N}eideidmk$'(mnyenmCNlpamnin$J$", 'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge', 'ppqmkkkmnolmnnCEhq/vkievk$Q$', 'yyegiivoguCYdohqwlqh/kguimhk$J$', 'end'])