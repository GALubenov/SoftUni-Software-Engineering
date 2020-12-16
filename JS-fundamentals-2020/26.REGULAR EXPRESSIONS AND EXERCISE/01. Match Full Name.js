function solve(input) {
    
    let pattern = /\b[A-Z][a-z]+[ ][A-Z][a-z]+/g;
    let result = input[0].match(pattern);
    console.log(result.join(' '))
}

solve(["Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"])