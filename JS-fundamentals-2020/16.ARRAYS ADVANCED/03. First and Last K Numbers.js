function solve(input) {

let k = input.shift();

console.log(input.slice(0, k).join(' '));
console.log(input.slice(input.length - k).join(' '));

}

solve(
    [3, 
       6, 7, 8, 9]
        
)