function solve(input) {
    input.pop();
    let message = input.shift();

    for (let line of input) {
        let [command1, command2, index1, index2] = line.split(' ');

        if (command1 === 'GladiatorStance') {
            message = message.toUpperCase();
            console.log(message);
        } else if (command1 === 'DefensiveStance') {
            message = message.toLowerCase();
            console.log(message);
        } else if (command1 === 'Dispel') {
            replace(command2, index1);
        } else if (command1 === 'Target') {
            if (command2 === 'Change') {
                change(index1, index2);
            } else if (command2 === 'Remove') {
                remove(index1);
            } else {
                console.log("Command doesn't exist!");
            }
        } else {
            console.log("Command doesn't exist!");
        }
    }

    function replace(index, letter) {
        index = +index;
        if (index > 0 && index <= message.length) {
            message = message.substring(0, index) + `${letter}` + message.substring(index + 1, message.length);
            console.log("Success!");
        } else {
            console.log("Dispel too weak.");
        }
    }

    function change(substring, secondSubstring) {
        message = message.replace(new RegExp(substring, 'g'), secondSubstring);
        console.log(message);
    }

    function remove(substring) {
       
        message = message.replace(new RegExp(substring, 'g'), '');
        console.log(message);
    }
}

solve(
    //[   'fr1c710n',
    //    'GladiatorStance',
   //     'Dispel 2 I',
    //    'Dispel 4 T',
    //    'Dispel 6 O',
    //    'Dispel 5 I',
    //    'Dispel 10 I',
    //    'Target Change RICTION riction',
    //    'For Azeroth' ]
    [ 'DYNICN4MICNIC',
      'Target Remove NIC',
       'Dispel 3 A',
       'DefensiveStance',
       'Target Change d D',
       'target change D d',
       'For Azeroth' ]
)