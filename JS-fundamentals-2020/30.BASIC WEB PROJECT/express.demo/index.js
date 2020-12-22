// npm init
// npm install express --save
// npm install express-handlebars --save

let express = require('express'); // ctrl + c -> stop server
let handlebars = require('express-handlebars');
let fs = require('fs');

let app = express();
let port = 3000;

app.engine('hbs', handlebars());
app.set('view engine', 'hbs');

//app.get('/', function (req, res) { res.send('Hello World!') });
app.get('/', (req, res) => { res.render('home', { layout: false }) });

//app.get('/catalog', (req, res) => { res.send('Catalog page!') });
app.get('/catalog', (req, res) => {
    let products = JSON.parse(fs.readFileSync('./data/products.json', 'utf-8')); // това е защото продуктите са хардкорднати и 
    //искаме да ги зареждаме динамично
    res.render('catalog', { layout: false, products });
});

app.get('/catalog/:serial_numbers', (req, res) => {
    //  let products = ['123', '456', '789']
    let products = JSON.parse(fs.readFileSync('./data/products.json', 'utf-8'));
    let sn = req.params.serial_numbers;
    if (products.find(x => x === sn)) {
        res.render('details', { layout: false, sn });
    } else {
        res.status(404);
        res.render('404', { layout: false });
    }
});

app.listen(port, () => {
    console.log(`Port listening on port ${port}`);
});