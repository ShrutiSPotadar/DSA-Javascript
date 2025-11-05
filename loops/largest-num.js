let arr = [10, 20, 30, 40, 50,70];
let largest = 0;

for(let i=0;i<arr.length;i++){
    if(arr[i] > largest){
        largest = arr[i];
    }
}
console.log(largest);