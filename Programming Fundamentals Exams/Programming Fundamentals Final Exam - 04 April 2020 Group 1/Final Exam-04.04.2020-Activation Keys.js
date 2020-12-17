function solve(input) {
    let message = input.shift();
    input.pop()
    const commandParser = {
        contains,
        flip,
        slice
    }
    for (let line of input) {
      //  let [command, type, startIndex, endIndex] = line.split('>>>');

      //  if (command === 'Slice') {
      //      del(type, startIndex);
      //  } else if (command === 'Flip') {
      //      flip(type, startIndex, endIndex);
      //  } else if (command === 'Contains') {
      //      contains(type);
      //  } else if (command === 'Generate') {
      //      console.log(`Your activation key is: ${message}`);
      //      break;
      //  }

      let tokens = line.split('>>>');
      let command = tokens.shift().toLowerCase();
      commandParser[command](...tokens)
    }

    function contains(subst) {
        let matches = message.match(subst)
        if (matches !== null) {
            console.log(`${message} contains ${matches}`);
        } else {
            console.log(`Substring not found!`);
        }//
    }

    function flip(type, startIndex, endIndex) {
        startIndex = +startIndex;
        endIndex = +endIndex;

        if (type === 'Upper') {
            let char = message.substring(startIndex, endIndex).toUpperCase();
            message = message.substring(0, startIndex) + char + message.substring(endIndex);
            console.log(message);
        } else {
            let char = message.substring(startIndex, endIndex).toLowerCase();
            message = message.substring(0, startIndex) + char + message.substring(endIndex);
            console.log(message);
        }
    }

    function slice(startIndex, endIndex) {
        startIndex = +startIndex;
        endIndex = +endIndex;

        if (isValidIndex(startIndex) && isValidIndex(endIndex)) {
            message = message.substring(0, startIndex) + message.substring(endIndex);
            console.log(message);
        }
    }

    function isValidIndex(index) {
        return index >= 0 && index < message.length
    }

    console.log(`Your activation key is: ${message}`);
}

solve(
    [
        'abcdefghijklmnopqrstuvwxyz',
        'Slice>>>2>>>6',
        'Flip>>>Upper>>>3>>>14',
        'Flip>>>Lower>>>5>>>7',
        'Contains>>>def',
        'Contains>>>deF',
        'Generate'
    ]

)