function test(input){
    let number =Number(input [0]);
    let sum = 0;
   
    if (number<=100){
    sum=number+5;          
    }else if(number>100 && number<=1000){
    sum=(number*0.20)+number;
   }else{
       sum=number*1.10;
   }
   
   if(number%2===0){
    sum=sum+1;
    }else if(number%10===5){
    sum=sum+2;
    }
    let bonus=sum-number;
    console.log(bonus);
    console.log(sum);
}
test([2703]);