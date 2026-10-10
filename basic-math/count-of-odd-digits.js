class Solution {
    countOddDigit(n) {
        let x=0;
        let count =0;
        while(n > 0){
            x = n % 10;
            if(x%2 !== 0){
                count++;
            }
            n = Math.floor(n/10); 
        }
        return count;
    }
}

const output = new Solution();
console.log(output.countOddDigit(123));