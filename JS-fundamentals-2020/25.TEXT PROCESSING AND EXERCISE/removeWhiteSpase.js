function solve(someText) {
    console.log(someText.trim()) // remove интервали отпред и отзад, нови редове и т.н

    //почиства стринг от множество интервали в стринг
    let formatedText = someText.split(' ').filter(c => c.length > 0).join(' ');
    console.log(formatedText)

}

solve('  asdf   agh   jk  ');