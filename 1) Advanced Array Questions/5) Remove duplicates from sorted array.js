//Here, an array is present with elements in a sorted manner.
//We need to give the output as how many unqiue elements are present in the array.
//Also, need to modify the same array with the unique elements in the left side.

let arr=[0,0,1,1,1,2,2,3,3,4]
let count=1
if(arr.length===0) console.log(0)
else{
    for(let i=1;i<arr.length;i++){
        if(arr[i-1]!==arr[i]){
            arr[count]=arr[i]
            count++
        }
    }
}
console.log(count)
console.log(arr)