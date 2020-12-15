function solve(incomeSum, averageGrade, minSalari) {
    incomeSum = +incomeSum;
    averageGrade = +averageGrade;
    minSalari = +minSalari;

    let socialScholarship = 0;
    let scholarshipForExelent = 0;

    if (incomeSum <= minSalari && averageGrade > 4.5) {
        socialScholarship = minSalari * 0.35;

        if (averageGrade >= 5.5) {
            scholarshipForExelent = averageGrade * 25;
        }

        if (socialScholarship > scholarshipForExelent) {
            console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);

        } else if (scholarshipForExelent >= socialScholarship) {
            console.log(`You get a scholarship for excellent results ${Math.floor(scholarshipForExelent)} BGN`);
        }

    } else if (incomeSum > minSalari && averageGrade >= 5.5) {
        scholarshipForExelent = averageGrade * 25;
        console.log(`You get a scholarship for excellent results ${Math.floor(scholarshipForExelent)} BGN`);
  
    } else  {
        console.log(`You cannot get a scholarship!`);
    }
}

solve(
    '480.00', '4.60', '450.00'
)