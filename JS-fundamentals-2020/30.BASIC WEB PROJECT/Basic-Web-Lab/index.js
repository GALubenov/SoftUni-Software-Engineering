// когато в package.json имаме депенданси което указва express и друг пише
//npm install който сваля необходимите библиотеки//т.е не е необходимо да пишем --save

const express = require('express'); //
const path = require('path'); // е ютилити модул от вградените който ни позволява да си сглобяваме пътищата до папки
//по надолу е показано как работи - използва се в комбинация с четене на файлове
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');// служи за да може да обработваме пост заявки 
//понеже пост заявките от клиента са стрийм и трудно се обработва, се използва тая готовоа билбиотека
//дава ни удобен достъп до данните които потребителя ни изпраща
const routing = require('./routing');// горните модули са външни библиотеки изтеглени от интернет, а този модул който започва с точка
//е модул който ние сме написали - означава в папката намери файл с подаденото име
//и зарежда друг файл и ескпортва функция
const port = 3000;
const app = express();

app.engine(".hbs", handlebars({
  extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static('public'));//това указва че папката public' може всеки да я отваря без да ни се налага да дефинираме път
app.use(bodyParser.urlencoded({
  extended: true
}));
routing(app);

app.listen(port, console.log("Listening on port " + port + "..."));