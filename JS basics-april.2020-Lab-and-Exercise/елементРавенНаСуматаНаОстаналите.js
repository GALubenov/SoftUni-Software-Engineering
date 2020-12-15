function hist(args) {
  let n = Number(args[0]);
  let sum = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 1; i <= n; i++) {
    let temp = Number(args[i]);
    sum += temp;
    if (temp > max) {
      max = temp;
    }

  }
  let min = sum - max;
  if (max === min) {
    console.log(`Yes`);
    console.log(`Sum = ${Math.abs(max)}`);
  } else {
    console.log(`No`);
    console.log(`Diff = ${Math.abs(max - min)}`);
  }

}
hist([4, 1, 1, 6, 2]);

function solve(args) {
  let n = Number(args[0]);
  let maxN = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    let element = Number(args[i]);
    sum += element;
    if (element > maxN) {
      maxN = element;
    }
  }
if ((sum - maxN) === maxN){
  console.log(`Yes`);
  console.log(`Sum = ${maxN}`);
}else{
  console.log(`No`);
  console.log(`Diff = ${Math.abs(maxN-(sum-maxN))}`);
}
}
solve([3, -1, -1, 2])