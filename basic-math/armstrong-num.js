let n = 123
        let x = 0;
        let sum = 0;
        let dup = n;
        while(n > 0){
            x = n%10;
            sum = sum + (x*x*x);
            n = Math.floor(n/10);
        }
        if(sum === dup){
            console.log(true);
        } else {
            console.log(false);
        }