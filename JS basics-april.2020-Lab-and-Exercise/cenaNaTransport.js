function hd(input){
let km=Number(input[0]);
let shift=input[1].toLowerCase();
let sum=0;
if (km <=20)
{if(shift==="day"){
    sum=0.70+(km*0.79); 
}else if(shift==="night"){
    sum=0.70+(km*0.90);
}
}
//bus
else if (km>=20 && km<100){
    sum=km*0.09;
}
//train
else if (km>=100){
sum=km*0.06;
}
console.log(sum.toFixed(2));

}
hd([5,"day"]);
