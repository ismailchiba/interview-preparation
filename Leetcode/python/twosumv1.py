from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Loop through each element in the list
        for i in range(len(nums)):
            # Loop through the elements that come after the current element
            for j in range(i + 1, len(nums)):
                # Check if the sum of the two elements matches the target
                if nums[i] + nums[j] == target:
                    # Return the indices of the two elements
                    return [i, j]
        # Return an empty list if no pair is found
        return []
