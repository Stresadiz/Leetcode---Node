function runningSum(nums: number[]): number[] {
    let output : number[];
    output = nums
    
    for (let i = 0; i < nums.length; i++) {
        if (i>0) {
            output[i] = output[i-1] + nums[i];
        } else{
            output[i] = nums[i]
        }
    }

    return output;
};

let nums = [1,2,3,4]
console.log(runningSum(nums));

let nums2 = [1,1,1,1,1]
console.log(runningSum(nums2));

let nums3 = [3,1,2,10,1]
console.log(runningSum(nums3));
