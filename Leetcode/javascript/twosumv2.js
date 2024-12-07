const twoSum = (nums, target) => {
    // Create a new Map to store the numbers and their indices
    const map = new Map();
    
    // Iterate through the array of numbers
    for (let index = 0; index < nums.length; index++) {
        let num = nums[index];
        // Calculate the complement of the current number
        let element = target - num;
        
        // Check if the complement exists in the map
        if (map.has(element)) {
            // If it exists, return the indices of the complement and the current number
            return [map.get(element), index];
        }
        
        // If it doesn't exist, add the current number and its index to the map
        map.set(nums[index], index);
    }
    
    // If no solution is found, return an empty array
    return [];
};