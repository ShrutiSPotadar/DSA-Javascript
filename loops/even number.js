// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
// let sum = 0;
// let a = [1,2,3,4,5];
// for(let i=0; i<a.length ;i++){
//     if(a[i] % 2 === 0)
//     {
//         sum = sum + a[i];
//     }
// }
//     console.log("sum", sum)


// nums = [2,7,11,15];
// target = 9;

//     for(let i=0; i<nums.length - 1; i++)
//         {
//         let sum = nums[i] + nums[i+1];
//         if(sum === target) {
//             console.log([i,i+1]);
//         }
//     }


    nums = [2,14,18,22,22];
if(nums.length == 1){
        return false;
    } 
    for(let i=0; i< nums.length - 1; i++){
        for(let j=0; j< nums.length; j++){
            if(nums[i] === nums[j])
                {
                    console.log(true)
                // return true;
            }    
        }
    }
    return false;

    console.log("nums", nums);