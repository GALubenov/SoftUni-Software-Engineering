let msg = "Hello World";
console.log(msg);

function interpolacia(inp){
    console.log(`Tochkite na ${inp[1]} sa ${inp[0]} i e ${inp[2]}`) //placeholderi ili 6abloni
}
interpolacia([20, "Ivan", "golem"]);

function modulnodelene(inp){
let first=inp[0];
let second=Number(inp[1]);
let third=inp[2];
let fourth=inp[3];
let ob6to=((first*second)+(third-fourth));
console.log(ob6to)
}
modulnodelene([5,'2',15,4])

function deliLiSesOstatuk(input){
        if (input%2==0){
        console.log("yes")
    } 
    else {
        console.log("no")
    }
}
deliLiSesOstatuk(17)

function math(){
let number=23.48884;
console.log(Math.ceil(number)) //zakruglq na gore
console.log(Math.floor(number)) //zakruglq na dolu
console.log(Math.trunc(number)) //izkarva celi 4isla
console.log(number.toFixed(3)+" lv.") //zakruglq do znak sled zapetaq
}
math()

function test(input){
    console.log(typeof input) //kak da proverqvame konkretniq elment kakyv tip e
}
test([1,2,3,4,5])
