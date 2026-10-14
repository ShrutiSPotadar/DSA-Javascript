class Solution {
    factorial(n) {
        let fact = 1;
        let i = 1;
        while(i<=n){
                fact = fact * i;
                i++;
            }
        return fact;
    }
}

const n = Number(process.argv[2]);
const output = new Solution();
console.log(output.factorial(n));