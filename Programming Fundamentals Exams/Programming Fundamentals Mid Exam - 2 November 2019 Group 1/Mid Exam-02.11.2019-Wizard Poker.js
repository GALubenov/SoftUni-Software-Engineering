function solve(input) {
    input.pop()
    let cards = input.shift().split(':')
    let output = [];

    for (let line of input) {
        if (line.includes('deck')) {
            shuffleDeck()
        } else {
            let [command, cardName, index] = line.split(' ')
            if (command === 'Add') {
                addCard(cardName)
            } else if (command === 'Insert') {
                insertCard(cardName, index)
            } else if (command === 'Remove') {
                removeCard(cardName)
            } else if (command === 'Swap') {
                swapCard(cardName, index)
            }
        }
    }

    function addCard(cardName) {
        if (cards.includes(cardName)) {
            output.push(cardName)
        } else {
            console.log("Card not found.")
        }
    }

    function insertCard(cardName, index) {
        index = Number(index);
        if (cards.includes(cardName) && index >=0 && index < output.length) {
            output.splice(index, 0, cardName)
        } else {
            console.log("Error!")
        }
    }

    function removeCard(cardName) {
        let index = output.indexOf(cardName)
        if (index === -1) {
            console.log("Card not found.")
        } else {
            output.splice(index, 1)
        }
    }

    function swapCard(cardName, index) {
        let indexCard1 = output.indexOf(cardName)
        let indexCard2 = output.indexOf(index)

        let temp = output[indexCard1]
        output[indexCard1] = output[indexCard2]
        output[indexCard2] = temp
    }

    function shuffleDeck() {
        output = output.reverse()
    }

    console.log(output.join(' '))
}

solve(
    [
        'Innervate:Moonfire:Pounce:Claw:Wrath:Bite',
        'Add Moonfire',
        'Add Pounce',
        'Add Bite',
        'Add Wrath',
        'Insert Claw 0',
        'Swap Claw Moonfire',
        'Remove Bite',
        'Shuffle deck',
        'Ready'
    ]
)