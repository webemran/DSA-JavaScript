let arr="racecar"
let i=0;
let j=arr.length-1;
function Pnumber(nums){
let temp=0;
    for(i;i<j;i++){
        if(nums[i]==nums[j-i]){
            continue;
        }
        else
        return 'not palindrome'
    }
    return "Palindrome"

}

console.log(Pnumber(arr))