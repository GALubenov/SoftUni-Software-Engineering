let fs = require('fs');

let text = fs.readFileSync('./data.txt', 'utf-8');

console.log(text)

let dataAsStirng = fs.readFileSync('./data.json', 'utf-8');
let data = JSON.parse(dataAsStirng);

console.log(data.Name);
console.log(data.Age);
console.log(data.Position);

data.Age++;
data.Position = 'Senior Dev';

console.log(data.Name);
console.log(data.Age);
console.log(data.Position);

fs.writeFileSync('./data2.json', JSON.stringify(data, null, 2), 'utf-8');
