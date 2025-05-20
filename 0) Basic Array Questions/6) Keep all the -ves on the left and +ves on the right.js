let arr = [-1,1,1,-1,1,-1]
let i=0,j=0;
while(i<arr.length && j<arr.length){
  if(arr[i]<0){
    [arr[i],arr[j]]=[arr[j],arr[i]]
    i++
    j++
  }
  else if(arr[i]>0){
    i++
  }
}
console.log(arr)
