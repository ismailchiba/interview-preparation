# Max Profit Problem

This repository contains solutions to the Max Profit problem from LeetCode using Python.

## Problem Statement

You are given an array `prices` where `prices[i]` is the price of a given stock on the `i-th` day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

## Example

**Input:** `prices = [7,1,5,3,6,4]`  
**Output:** `5`  
**Explanation:** Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.

## Solution

The solution involves iterating through the list of prices while keeping track of the minimum price encountered so far and the maximum profit that can be achieved.
```python
class Solution2:
    def maxProfit(prices) -> None:
        # declare 4 variables 
        minPrice = prices[0]
        maxProfit = 0
        buyDay = 0
        sellDay = 0
        
        for i in range(1, len(prices)):
            if prices[i] < minPrice:
                minPrice = prices[i]
                buyDay = i + 1
            else:
                maxProfit = max(maxProfit, prices[i] - minPrice)
                sellDay = i + 1
        
        print(f"buy day is {buyDay}, sell day is {sellDay} and the profit is {maxProfit}", end="")

Solution2.maxProfit([7,1,5,3,6,4])
```

### Time Complexity

The time complexity of this solution is O(n), where n is the number of days (or the length of the `prices` array). This is because we only make a single pass through the array.

### Space Complexity

The space complexity of this solution is O(1) because we are using only a constant amount of extra space to store `minPrice`, `maxProfit`, `buyDay`, and `sellDay`.

This project is licensed under the MIT License.