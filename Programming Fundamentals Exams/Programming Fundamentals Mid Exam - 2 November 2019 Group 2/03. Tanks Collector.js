function solve(input) {
    let tanks = input.shift().split(', ');
    let num = Number(input.shift());

    for (let i = 0; i < num; i++) {
        let [command, firstArg, secondArg] = input[i].split(', ')
        switch (command) {
            case 'Add': {
                if (tanks.includes(firstArg)) {
                    console.log("Tank is already bought");
                } else {
                    console.log("Tank successfully bought");
                    tanks.push(firstArg);
                }
                break;
            }

            case 'Remove': {
                if (tanks.includes(firstArg)) {
                    let indexOfTank = tanks.indexOf(firstArg);
                    console.log("Tank successfully sold");
                    tanks.splice(indexOfTank, 1);
                } else {
                    console.log("Tank not found");
                }
                break;
            }

            case 'Remove At': {
                let index = Number(firstArg);
                if (index >= 0 && index < tanks.length) {
                    console.log("Tank successfully sold");
                    tanks.splice(index, 1);
                } else {
                    console.log("Index out of range");
                }
                break;
            }

            case 'Insert': {
                let index = Number(firstArg);
                let tankName = secondArg;

                if (index >= 0 && index < tanks.length) {
                    if (tanks.includes(tankName)) {
                        console.log("Tank is already bought");
                    } else {
                        console.log("Tank successfully bought");
                        tanks.splice(index, 0, tankName);
                    }
                } else {
                    console.log("Index out of range");
                }
                break;
            }
        }
    }

    console.log(tanks.join(', '))

}

solve(
 //   ['T-34-85 Rudy, SU-100Y, STG', '3', 'Add, King Tiger(C)', 'Insert, 2, IS-2M', 'Remove, T-34-85 Rudy']
     ['T 34, T 34 B, T92, AMX 13 57', '4', 'Add, T 34', 'Remove, AMX CDC', 'Insert, 10, M60', 'Remove At, 1']
)