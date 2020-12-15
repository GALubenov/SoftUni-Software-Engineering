function tri(args) {

    for (let a = 0; a <= 9; a++) {
        for (let b = 0; b <= 9; b++) {
            for (let c = 0; c <= 9; c += 2) {
                let curent = ((a * 100) + b * 10) + c;
                console.log(curent);
            }
        }
    }
}
tri()