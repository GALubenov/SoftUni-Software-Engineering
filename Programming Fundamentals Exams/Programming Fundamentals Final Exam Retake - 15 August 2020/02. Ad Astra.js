function solve(input) {
  let text = input[0];
  let pattern = /[#][A-Za-z\s]+[#][0-9]{2}\/[0-9]{2}\/[0-9]{2}[#][0-9]{1,5}[#]|[\|][A-Za-z\s]+[\|][0-9]{2}\/[0-9]{2}\/[0-9]{2}[\|][0-9]{1,5}[\|]/g
  let matches = text.matchAll(pattern);
  let sumOfCalories = 0;
  let arr = [];

  for (let match of matches) {
    if (match) {
      if (match[0].includes('#')) {
        let temp = match[0].split('#');
        temp.shift();
        temp.pop();
        arr.push(temp);
      } else if (match[0].includes('|')) {
        let temp = match[0].split('|');
        temp.shift();
        temp.pop();
        arr.push(temp);
      }
    }
  }

  for (let line of arr) {
    let initialCalories = Number(line[2]);
    if (initialCalories >= 0 && initialCalories <= 10000) {
      sumOfCalories += initialCalories;
    }
  }

  let days = sumOfCalories / 2000;
  console.log(`You have food to last you for: ${Math.trunc(days)} days!`);
  if (arr.length > 0) {
    for (let line of arr) {
      console.log(`Item: ${line[0]}, Best before: ${line[1]}, Nutrition: ${line[2]}`);
    }
  }
}

solve(
 // ['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']
  // ['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']
   ['Hello|#Invalid food#19/03/20#450|$5*(@']
)