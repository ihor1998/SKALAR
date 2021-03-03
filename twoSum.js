function twoSum(nums, target) {
   const hash = {};

    for(let i=0; i<=nums.length; i++){
        const currentNumber = nums[i];
        const requiredNumber = target - currentNumber;
        
        const index = hash[requiredNumber];
        
        if(index !== undefined) {
            return [index, i]
        } else {
            hash[currentNumber] = i;
        }
    }
};
