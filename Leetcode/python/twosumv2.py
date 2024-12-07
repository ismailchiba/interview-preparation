from typing import List

class Solution :
    #function to find the indices of the two elements that add up to the target
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashmap ={}
        
        #iterate through each element in the list
        for i,n in enumerate(nums):
            #calculate the difference between the target and the current element
            diff = target - n
            #check if the difference is in the hashmap
            if diff in hashmap:
                #return the indices of the two elements
                return [hashmap[diff],i]
            #add the current element to the hashmap
            hashmap[n] = i