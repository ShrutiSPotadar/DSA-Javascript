class Solution {
    divisors(n) {
        let result = [];

        for (let i = 1; i <= n; i++) {
            if (n % i === 0) {
                result.push(i);
            }
        }

        return result;
    }
}

const n = Number(process.argv[2]);

const output = new Solution();
console.log(output.divisors(n));