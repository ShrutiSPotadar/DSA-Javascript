class Solution {
    pattern1(n) {
        let pattern = "";

        for (let i = 0; i < n; i++) {
            let row = "";

            for (let j = 0; j < n; j++) {
                row += "*";
            }

            pattern += row + "\n";
        }

        return pattern;
    }
}

const output = new Solution();
console.log(output.pattern1(5));