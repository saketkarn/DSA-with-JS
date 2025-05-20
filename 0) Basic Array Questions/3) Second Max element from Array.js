let arr = [10,8,9,7,11,111];
let max=Math.max(arr[0],arr[1])
let secondMax=Math.min(arr[0],arr[1])
for(let i=2;i<arr.length;i++){
  if(arr[i]>max){
    secondMax=max
    max=arr[i]
  }
  else if(arr[i]!==max && arr[i]>secondMax){
    secondMax=arr[i]
  }
}

console.log(secondMax)
