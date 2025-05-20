let arr = [7, 1, 5, 3, 6, 4]
let min = arr[0], profit = 0
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i]
    }
    else {
        profit = Math.max(profit, arr[i] - min)
    }
}
console.log(profit)