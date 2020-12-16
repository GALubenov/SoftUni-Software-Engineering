function solve(input) {

    let arr = input.split('');
    let firstPart = arr.slice(0, arr.length / 2).reverse().join('');
    let secondPart = arr.slice(arr.length / 2 ).reverse().join('');
   
    console.log(firstPart);
    console.log(secondPart);
}

solve('tluciffiDsIsihTgnizamAoSsIsihT')
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')