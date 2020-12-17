function solve(input) {

    let shelf = input.shift().split('&');

    for (let line of input) {
        let [command, index, book2] = line.split(' | ');

        if (command === 'Add Book') {
            addBook(index);
        } else if (command === 'Take Book') {
            takeBook(index);
        } else if (command === 'Swap Books') {
            swapBooks(index, book2);
        } else if (command === 'Insert Book') {
            insertBook(index);
        } else if (command === 'Check Book') {
            checkBook(Number(index));
        } else if (command === 'Done') {
            break;
        }
    }

    function addBook(nameBook) {
        if (!shelf.includes(nameBook)) {
            shelf.unshift(nameBook);
        }
    }

    function takeBook(nameBook) {
        if (shelf.includes(nameBook)) {
            let indexOfBook = shelf.indexOf(nameBook);
            shelf.splice(indexOfBook, 1);
        }
    }

    function swapBooks(nameBook, book2) {
        if (shelf.includes(nameBook) && shelf.includes(book2)) {
            let indexBook1 = shelf.indexOf(nameBook);
            let indexBook2 = shelf.indexOf(book2);

            let temp = shelf[indexBook1];
            shelf[indexBook1] = shelf[indexBook2];
            shelf[indexBook2] = temp;
        }
    }

    function insertBook(nameBook) {
        if (!shelf.includes(nameBook)) {
            shelf.push(nameBook)
        }
    }

    function checkBook(index) {
        if (index >= 0 && index <= shelf.length - 1) {
            console.log(shelf[index])
        }
    }

    console.log(shelf.join(', '))
}

solve(
    [
        'Anna Karenina&Heart of Darkness&Catch-22& The Stranger',
        'Add Book | David Copperfield',
        'Add Book | One Thousand and One Nights',
        'Swap Books | One Thousand and One Nights | Catch-22',
        'Take Book | David Copperfield',
        'Insert Book | The Stories of Anton Chekhov',
        'Check Book | 17',
        'Done',
        ''
    ]
)