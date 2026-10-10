class Solution {
    countDigit(n) {
        let count = 0;
        while(n>0){
            count = count +1;
            n = Math.floor(n/10);
        }   
    return count;
}
}

const output = new Solution();
console.log(output.countDigit(123));