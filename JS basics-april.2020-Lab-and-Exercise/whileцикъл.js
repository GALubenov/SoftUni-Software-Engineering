
whileC([1000, 10, 27, 102]);
function whileC(args) {
    let i = 0;
    let num = args[i];

    while (num < 1 || num > 100) //dokato uslovieto v buleviq izraz e true, programata/koda 6te se izpylnqva, i kogato koda stane false programata spira
        {i++;
        console.log("Invalid number");
        num = Number(args[i]);
    }
    console.log(`The number is: ${num}`);
}

// blok shema
// while (uslovie, bulev izraz - ako e true) {
// tqloto v koeto pi6em - komanda, kod za izpylnenie, 6te se izpynqva dokato logi4eskoto uslovie e true
// ili v momenta v koito uslovieto e false, koda prikly4va i programata prodyljava natatyk   }

let a = 9;
while (a <= 100){
    if (a === 11){break;}
    console.log ("a = " + a);
    a++;
}
console.log("Hello!");