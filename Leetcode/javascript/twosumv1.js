
/**
 * Finds two numbers in an array that add up to a given target and returns their indices.
 *
 * @param {number[]} nums - The array of numbers.
 * @param {number} target - The target sum.
 * @returns {number[]} - An array containing the indices of the two numbers that add up to the target.
 */
function twoSum(nums, target){
    // Loop through the array
    for (let i = 0; i< nums.length; i++){
        // Loop through the array starting from the next index
        for (let j = i + 1 ; j<nums.length; j++){
            // If the sum of the two numbers is equal to the target, return the indices
            if (nums[i] + nums[j] === target)
                return [i, j];
        }
    }
}

export default twoSum;