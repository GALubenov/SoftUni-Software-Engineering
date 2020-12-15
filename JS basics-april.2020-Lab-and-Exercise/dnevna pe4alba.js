function dnevnaPe4alba(input){
    let days=Math.trunc(input[0]); //validirame go cqlo 4islo s Math.
    let moneyForDay=input[1]
    let dolarRate=input[2]
   
    let oneDolarSalary=days*moneyForDay;
    let YearSalary=oneDolarSalary*14.5;
    let YearProfit=YearSalary-(YearSalary*0.25);
    
    let salaryInLeva=YearProfit*dolarRate;
    let earnLevaForOneDay=salaryInLeva/365;
    console.log(earnLevaForOneDay.toFixed(2)+" lv. for one day") //fiksirame do vtoriq znak ot zapetaqta
}
dnevnaPe4alba([21.5,75.00,1.59]) //vhodnite danni inputa
