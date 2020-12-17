function solve(input) {

    let line = input.shift();
    let obj = {};

    while (line !== 'Log out') {
        let [command, name, argument] = line.split(': ')
        argument = Number(argument);

        switch (command) {
            case 'New follower': {
                if (!obj[name]) {
                    obj[name] = { like: 0, comments: 0 }
                }
                break;
            }

            case 'Like': {
                if (!obj[name]) {
                    obj[name] = { like: argument, comments: 0 }
                } else {
                    obj[name].like += argument;
                }
                break;
            }

            case 'Comment': {
                if (!obj[name]) {
                    obj[name] = { like: 0, comments: 1 }
                } else {
                    obj[name].comments += 1;
                }
                break;
            }

            case 'Blocked': {
                if (!obj[name]) {
                    console.log(`${name} doesn't exist.`);
                } else {
                    delete obj[name];
                }
            }
        }

        line = input.shift();
    }

    let entries = Object.entries(obj);
    let sorted = entries.sort((a, b) => {
        if (b[1].like - a[1].like === 0) {
            return a[0].localeCompare(b[0]);
        } else {
            return b[1].like - a[1].like;
        }
    });

    console.log(`${entries.length} followers`);
    for (let kvp of sorted) {
        console.log(`${kvp[0]}: ${kvp[1].like + kvp[1].comments}`);
    }
}

solve(
    [
        'New follower: gosho',
        'Like: gosho: 5',
        'Comment: gosho',
        'New follower: gosho',
        'New follower: tosho',
        'Comment: gosho',
        'Comment: tosho',
        'Comment: pesho',
        'Log out'
    ]
    // [
    //   'Like: A: 3',
    //   'Comment: A',
    //    'New follower: B',
    //    'Blocked: A',
    //    'Comment: B',
    //    'Like: C: 5',
    //    'Like: D: 5',
    //    'Log out'
    //  ]
)