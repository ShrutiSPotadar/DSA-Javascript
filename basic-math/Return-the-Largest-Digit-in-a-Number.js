class Solution {
    largestDigit(n) {
        let x=0;
        let largest =0;
        while(n > 0){
            x = n % 10;
            if(x>largest){
                largest = x
            }
            n = Math.floor(n/10); 
        }
        return largest;
    }
}

const n = Number(process.argv[2]);

const output = new Solution();
console.log(output.largestDigit(n));