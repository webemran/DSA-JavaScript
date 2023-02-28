//let arry =[20,15,12,10,8,4,3,2,1]; //Descending Array
let arry=[10,20,30,40,50,60,70]     //Ascending Array
let startValue=arry[0];
let endValue=arry[arry.length-1];
let isAscending=(endValue-startValue); 
const key=3;

function oabSearch(arry,key){ //Function Order Agnostic Binary Search 
    start=0;
    let end=arry.length-1 //Find array last index

    if(isAscending>0){// checking given array is ascending or not
        //Code for Assending array
        while(start <= end){ // Condition check
            let mid=Math.floor((start + end)/2); //Calculate Mid Value
           if(arry[mid]===key){ // Condition check
               return `Given array is Ascending ${key} is found at index `+mid; // return index number and exit
            }
           else if(arry[mid]<key){// Condition check
                start=mid+1; //Update start
           }
          else{
               end=mid-1; //Update end
           }
       }
       return 'Data Not Found'; //Stop Loop
    }
    else{ 
        // Code for Descending array
        while(start <= end){  
            let mid=Math.floor((start + end)/2); //Calculate Mid Value
            if(arry[mid]===key){ // Condition check
                return `Given array is Descending ${key} is found at index `+mid; // return index number and exit
            }
            else if(arry[mid]>key){ // Condition check
                start=mid+1; //update start
            }
            else{
                end=mid-1; //update end
            }
        }
        return 'Data Not Found!'; //Stop Loop
    }
}
console.log(oabSearch(arry,key))