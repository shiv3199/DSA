let a =[7,1,3,4,5,6,7]
function maxProfit(prices){
 let min = prices[0];
    let maxProfit = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - min > maxProfit) {
            maxProfit = prices[i] - min
        }
        if (prices[i] < min) {
            min = prices[i]
        }

    }
    return maxProfit
}
console.log(maxProfit(a))