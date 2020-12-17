function solve(input) {
    let arr = [];
    let pattern = /=[A-Z]{1}[A-Za-z]{2,}=|\/[A-Z]{1}[A-Za-z]{2,}\//g;

    let matched = input.match(pattern);
    if (matched) {
        matched.forEach(element => {
            arr.push(element.slice(1, element.length - 1));
        });
    };

    let points = arr.reduce((acc, item, index) => {
        return acc + item.length
    }, 0);

    console.log(`Destinations: ${arr.length > 0 ? arr.join(', ') : ''}`);
    console.log(`Travel Points: ${points}`);
}

solve(
    '=Hawai=/Cyprus//BulgariaFrance/=Invalid/invalid==i5valid=/I5valid/=i='
    // 'ThisIs some InvalidInput'
)