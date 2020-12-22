/* TODO: 
	create phonebook array
	add methods for adding in the phonebook and getting it
	export the methods
*/

let Contact = require('./models/Contact');

let contacts = [
	{
		name: 'Peter',
		number: '+359557559663'
	},
	{
		name: 'John',
		number: '+359855799113'
	},
	{
		name: 'Mile',
		number: '+359886693373'
	}
];

function getAll() {
	return contacts.slice();
}

function addContacts(name, number) {
	let contact = new Contact(name, number);

	contacts.push(contact);
}

module.exports = {
	getAll,
	addContacts
}