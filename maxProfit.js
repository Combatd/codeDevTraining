/*
You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.
*/

// I need to return the max profit I can get with a stock
// The stock prices are represented by an array with each element being the stock's price that day
// Buying and selling the stock the same day basically means no profit, so no change to our max profit
// I have to iterate in for loop and compare the prices[i] current day stock price with the previous day stock price, accumulating it into a maxProfit variable the difference of current day and last day price when current day is higher price
// start at day 2 as we will compare current day price to previous price



/**
 * @param {number[]} prices
 * @return {number}
 */

// Time Complexity: O(n) have to iterate through all prices which are elements of an array
// Space Complexity: O(1) : no new data structures were created just variable declarations
var maxProfit = function(prices) {
    let maxProfit = 0;

   for (let i = 1; i < prices.length; i++) { O(n)
       if (prices[i] > prices[i-1]) {
           let todaysProfit = prices[i] - prices[i - 1] // O(1)
           maxProfit += todaysProfit // O(1)
        }	
    }
return maxProfit
};
