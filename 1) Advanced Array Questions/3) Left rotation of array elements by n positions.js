let arr = [1, 2, 3, 4, 5]
let n = 3
for (let k = 0; k < n; k++) {
    let temp = arr[0]
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i]
    }
    arr[arr.length - 1] = temp
}

console.log(arr)




//Optimized approach:

// let arr=[1,2,3,4,5]
// let k=9
// k=k%arr.length
// let temp=new Array(arr.length);
// for(let i=0;i<arr.length;i++){
//   temp[i]=arr[(i+k)%arr.length]
// }
// console.log(temp)