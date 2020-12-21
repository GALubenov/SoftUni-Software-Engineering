let express = require('express'); // ctrl + c -> stop server

let app = express();
let port = 3000;

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/catalog', (req, res) => {
    res.send('Catalog page!');
});

app.get('/catalog/:serial_numbers', (req, res) => {
    let products = [
        '123',
        '456',
        '789'
    ]

    let sn = req.params.serial_numbers;

    if (products.find(x => x === sn)) {
        res.send(`
    <h1>Catalog page!</h1>
    <p>Product Number: ${sn}</p>
    `);
    } else {
        res.status(404);
        res.send(`<p>Error 404: Product with S/N ${sn} was not found!</p>`);
    }
});


app.listen(port, () => {
    console.log(`Port listening on port ${port}`);
});