const phonebook = require('../phonebook');

module.exports = {
  index: (req, res) => {
    let contacts = phonebook.getAll(); // връща масив с обекти, които са контактите
    //след като тази променлива пази данните, се подава на views -> index.hbs за да се рендерира и изпълнява contacts
    res.render('index', { contacts }); //res.render означава, че това което си изрендил го покажи на клиента
    // contacts се подава като свойство на обекта, а не като променлива
    //т.е подаваме обект, който има свойство contacts - това се подава на темплейта, в темплейта отива масив който с #each се обхожда и се зареждат данните
    // TODO: load index page
  },
  addPhonebookPost: (req, res) => {
    // TODO: add a phonebook object to the array

    let name = req.body.name;
    let number = req.body.number;
    phonebook.addContacts(name, number);
    res.redirect('/');
  }
}