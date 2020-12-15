function rul(args) {

    for (let a = 97; a <= 122; a++) {
        for (let b = 65; b <= 90; b++) {
            for (let c = 33; c <= 47; c++) {

                if ((String.fromCharCode(a) === "b") && (String.fromCharCode(b) === "B") && (String.fromCharCode(c) === "+")) {
                    console.log(`You Win!`)
                    return;
                } else {
                    console.log(`${String.fromCharCode(a)} ~ ${String.fromCharCode(b)} ~ ${String.fromCharCode(c)}`);
                }
            }
        }
    }

}
rul([]);