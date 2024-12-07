
class Solution1:
    def maxProfit(prices):
        #declare two variables 
        minPrice = prices[0]
        maxProfit = 0
        
        for i in range(len(prices)):
            if prices[i] < minPrice :
                minPrice = prices[i]
            else :
                maxProfit = max(maxProfit, prices[i] - minPrice)
        return maxProfit
    
class Solution2:
    def maxProfit(prices) -> None:
        #declare 4 variables 
        minPrice = prices[0]
        maxProfit = 0
        buyDay = 0
        sellDay = 0
        
        for i in range(1,len(prices)):
            if prices[i] < minPrice :
                minPrice = prices[i]
                buyDay = i + 1
            else :
                maxProfit = max(maxProfit, prices[i] - minPrice)
                sellDay = i + 1
        
        print(f"buy day is {buyDay} ,sell day is {sellDay} and the profit is {maxProfit} ",end="")


Solution2.maxProfit([7,1,5,3,6,4])

# print(f"{Solution1.maxProfit([7,1,5,3,6,4])}")