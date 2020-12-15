function food (args){
 let chikenMeal = 10.35;
 let fishMeal = 12.40;
 let vegetableMeal = 8.15;

 let numChikenMeal = Number (args[0]) * chikenMeal;
 let numFishMeal = Number (args[1]) * fishMeal;
 let numVegetableMeal = Number (args[2]) * vegetableMeal;
 
 let sumMeal = numChikenMeal+numFishMeal+numVegetableMeal;
 let desert = sumMeal * 0.20;
 let deliveryPrice = 2.5;

let totalPrice = sumMeal+desert+deliveryPrice;

console.log(`Total: ${totalPrice.toFixed(2)}`);


}

food([2,
    4,
    3,
    ])