function coorDi(input) {
    let a = input[0];
    let b = "mammal";
    let c = "reptile";

    switch (a) {
        case "dog": console.log(b); break;
        case "crocodile":
        case "tortoise":
        case "snake": console.log(c); break;

        default: console.log("unknown");
    }
}
coorDi(["tortoise"]);