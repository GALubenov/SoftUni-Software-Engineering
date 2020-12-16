function solve(input) { // 100 points in judge
    let pattern = /[#][A-Za-z\s]+[#][0-9]{2}\/[0-9]{2}\/[0-9]{2}[#][0-9]{1,5}[#]|[\|][A-Za-z\s]+[\|][0-9]{2}\/[0-9]{2}\/[0-9]{2}[\|][0-9]{1,5}[\|]/g
    let text = input[0];
    let totalCall = 0;
    let arr = [];

    let matches = pattern.exec(text);
    while (matches != null) {
        let string = matches[0];

        if (string.includes('#')) {
            let tokens = string.split('#');
            tokens.shift();
            tokens.pop();
            arr.push(tokens);
        } else if (string.includes('|')) {
            let tokens = string.split('|');
            tokens.shift();
            tokens.pop();
            arr.push(tokens);
        }

        matches = pattern.exec(text);
    }

    for (let line of arr) {
        totalCall += Number(line[2]);
    }

    let days = (totalCall / 2000);
    console.log(`You have food to last you for: ${Math.trunc(days)} days!`);
    if (days > 0) {
        for (let key of arr) {
            console.log(`Item: ${key[0]}, Best before: ${key[1]}, Nutrition: ${key[2]}`);
        }
    }
}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@'])

function adAstra(input) { // 33 points in judge
    let pattern = /([\|#])(?<name>[A-Za-z\s]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<callories>[0-9]{1,5})\1/g;
    let text = input[0];
    let obj = {};
   
    let matches = pattern.exec(text);
    while (matches != null) {
        let name = matches.groups.name;
        let date = matches.groups.date;
        let call = Number(matches.groups.callories);

        obj[name] = { Date: date, Callories: call }

        matches = pattern.exec(text);
    }

    let totalCall =  Object.values(obj).reduce((acc, v) => {
        return acc += v.Callories;
    }, 0);

    let days = Math.floor(totalCall / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    if (days > 0) {
        Object.keys(obj).forEach(key => {
            console.log(`Item: ${key}, Best before: ${obj[key].Date}, Nutrition: ${obj[key].Callories}`);
        })
    }
}