function test(){
let a=5;
let b=5;
console.log(a==b) // == sravnqva dali ednoto e ednakvo,ravno na drugoto po stoinost
}
test()
function test1(){
    let a = "5";
    let b = 5;
    console.log(a===b);// === sravnqva, proverqva dali edna promenliva e ravna i po tip i po stoinost
}
test1();
function test2(){
    let a = 5;// != sravnqva dali ednoto ne e ednakvo, ne e ravno na drugoto po stoinost
    let b = 5;
    console.log(a!=b);
}
test2();
function test3(){
    let a = 5;
    let b = 5;
    console.log(a!==b); // !== dali ne sa ednakvi i po soinost i po tip 
}
test3();
function test4(){
    let a = 5;
    let b = 5*2;
    console.log(a<=b); 
}
test4();
function test5(){
    let a = 5;
    let b = 5;
    if(a<b){
       console.log("a<b"); // vyvejda sse kod za izpalnenie
    }else if(a===b){
        console.log("a=b")
    }else{
        console.log("a>b");
    }
    }
test5();
function ocenka(input){
   let grade = input [0];
   if (grade>=4.5){
       console.log("Ëxelent");
   }else{
       console.log("NotExelent");
   }
      }
ocenka([5]);
function pol(input){
    let gender = input [0];
    if (gender==="Male"){
        console.log("I'm Male");
    }else if (gender==="Male"){
        console.log("Fmale");
    }else{
        console.log("Invalid Input");
    }
       }
 pol(["malll"]);
 function chetnoNe4etno(input){
     let a=input[0];
          if (a%2===0){
         console.log("even");
     }else {
         console.log("odd");
     }
 }
chetnoNe4etno([5])

function greaterNumber(input){
    let a=input[0];
    let b=input[1];
    console.log(Math.max(a,b))
    
    //if (a>b){
       // console.log("Greater number:"+Math.trunc(a));
    //}else if (b>a){
      //  console.log("Greater number:"+Math.trunc(b));
    //}else(
      //  console.log("even")
    //)
}
greaterNumber([7,7]);

