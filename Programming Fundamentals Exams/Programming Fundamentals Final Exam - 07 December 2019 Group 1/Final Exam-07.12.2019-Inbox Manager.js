function solve(input) {
    let obj = {};
    for (let line of input) {
        let [command, name, index] = line.split('->');
        if (command === 'Add') {
            add(name);
        } else if (command === 'Send') {
            send(name, index);
        } else if (command === 'Delete') {
            del(name);
        } else if (command === 'Statistics') {
            break;
        }
    }

    function add(username) {
        if (!obj.hasOwnProperty(username)) {
            obj[username] = [];
        } else {
            console.log(`${username} is already registered`);
        }
    }

    function send(username, email) {
        if (obj.hasOwnProperty(username)) {
            obj[username].push(email);
        }
    }

    function del(username) {
        if (obj.hasOwnProperty(username)) {
            delete obj[username];
        } else {
            console.log(`${username} not found!`);
        }
    }

    let sortEmail = Object.entries(obj)
        .sort(sorted);

    console.log(`Users count: ${sortEmail.length}`);

    for (let [username, email] of sortEmail) {
        console.log(`${username} \n - ${email.join('\n - ')}`);
    }

    function sorted(u1, u2) {
        let [userName1, message1] = u1;
        let [userName2, message2] = u2;

       let firstCriteria = message2.length - message1.length;

        if (firstCriteria === 0) {
            return userName1.localeCompare(userName2);
        }

        return firstCriteria;
    }
}

solve(
      [
          'Add->Mike',
          'Add->George',
          'Send->George->Hello World',
          'Send->George->Some random test mail',
          'Send->Mike->Hello, do you want to meet up tomorrow?',
          'Send->George->It would be a pleasure',
          'Send->Mike->Another random test mail',
          'Statistics'
      ]
  // // [
  //      'Add->Mike',
  //      'Add->George',
  //      'Send->George->Hello World',
 // //      'Add->Mike',
  //      'Send->Mike->Hello, do you want to meet up tomorrow?',
  //      'Delete->Peter',
  //      "Send->George->I'm busy",
  //      'Send->Mike->Another random test mail',
  //      'Delete->George',
  //      'Statistics'
  //  ]
    //    [
    //     'Add->Annie',
    //     'Add->George',
    //     'Send->George->Hello World',
    //     'Send->George->Some random test mail',
    //     'Send->Annie->Hello, do you want to meet up tomorrow?',
    //     'Send->George->It would be a pleasure',
    //     'Send->Annie->Another random test mail',
    //     'Delete->Annie',
    //     'Delete->George',
    //     'Statistics'
    //   ]
)