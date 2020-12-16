let arr = [1, 2, 3, 4];

function myPush(arr, element) {
    return arr[arr.length] = element;
}

function myPop(arr) {
    let element = arr[arr.length - 1];
    arr.length--;
    return element;
}

function mayIndexOf(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}

console.log(mayIndexOf(arr, 4));

myPush(arr, 5);
console.log(arr);

myPop(arr);
console.log(arr);

