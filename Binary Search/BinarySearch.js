
let arr=[10,12,14,16,14,10];
let key=14;
function BinarySearch(arr,key){
    let start=0; 
    let end=arr.length-1; //find the array last index
    while(start <= end){ //condition check 
        let mid=Math.floor((start + end)/2); //Calculate Mid Value
        if(arr[mid]===key){ // Condition check
            return `${key} is found at index `+mid; // return index number and exit
        }
        else if(arr[mid]<key){ // if mid is less then key 
            start=mid+1; // update the start value
        }
        else{
            end=mid-1; // update the end value
        }
    }
    return 'Data Not Found'; //loop stop 
}

let result=BinarySearch(arr,key);
console.log(result);
