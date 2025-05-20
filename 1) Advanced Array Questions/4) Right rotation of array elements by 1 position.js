let arr = [1, 2, 3, 4, 5]
let n = 4
for (let k = 0; k < n; k++) {
    let temp = arr[arr.length - 1]
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1]
    }
    arr[0] = temp
}

console.log(arr)

//Optimized approach:

// let arr=[1,2,3,4,5]
// let k=9
// k=k%arr.length
// let temp=new Array(arr.length);
// for(let i=arr.length-1;i>0;i--){
//   temp[i]= arr[((arr.length-k)+i)%arr.length]
// }
// console.log(temp)