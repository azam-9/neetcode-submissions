class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let dup = new Set();

        for(let i = 0; i< nums.length; i++){
            if(dup.has(nums[i])){
                return true;
            }
            else{
                dup.add(nums[i]);
            }
        }
        return false;
    }
}
