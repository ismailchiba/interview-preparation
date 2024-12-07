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


const twoSum1 = (nums, target) => {
    const hashmap ={};
    let result = null

    nums.forEach((item, index)=> { let complement = target - item;
        if (complement in hashmap) {
            result = [hashmap[complement], index];
        }
        hashmap[item] = index;
    })
    return result;
}


const twoSum2 = (nums, target) => {
    const hashmap = {};
    let result = null;

    nums.some((item, index) => {
        let element = target - item;
        if (element in hashmap) {
            result = [hashmap[element], index];
            return true;//stop iterating 
        }
        hashmap[item] = index;
        return false;//to continue the iteration
    })
    return result;
}