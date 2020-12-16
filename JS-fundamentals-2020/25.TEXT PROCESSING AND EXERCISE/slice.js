function solve(text) {

    //намиране на дума с който завършва стринга или с който започва 
    let wordStart = 'Some';
    let wordEnd = 'js';

    console.log(text.slice(0, wordStart.length) === wordStart);
   
    console.log(text.slice(-wordEnd.length) === wordEnd);


    //padStart - допълва стринга или подравнява текст
    let hour = '14';
    let minutes = '7';
    console.log(`${hour.padStart(2, '0')} : ${minutes.padStart(2, '0')}`);
    console.log('text'.padStart(8, '===='));
    console.log('text'.padEnd(8, '===='));
    // with slice
    console.log(('---'.repeat(8) + 'text').slice(-8));


}

solve('Some text in JS!');