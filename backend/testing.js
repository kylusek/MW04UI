let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

for(let i = 2; i < arr.length-1; i++) {
    arr[i] = arr[i+1];
}
arr.pop();

console.log(arr);