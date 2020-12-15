function matrici(args) {
    let one = Number(args[0]);
    let two = Number(args[1]);
    let tri = Number(args[2]);
    let four = Number(args[3]);
  
    for (let a = one; a <= two; a++) {
        for (let b = two; b >= one; b--) {
            for (let c = tri; c <= four; c++) {
                for (d = four; d >= tri; d--) {

                    if (a + d == b + c && c + b == d + a && a != b && c != d) {
                        console.log(`${a}${b}`)
                        console.log(`${c}${d}`)
                        console.log(``)
                    }
                }
            }
        }
    }
}
matrici([5, 7, 5, 6]);