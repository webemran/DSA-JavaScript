let arr="12121"
let i=0;
let j=arr.length-1;

function palindromeString(nums){
    while(i<=j){
        if(nums[i]==nums[j]){
            i++;
            j--;
        }
        else{
            return 'Not Plaindrome'
        }
    }
    return 'Palindrome'
};

console.log(palindromeString(arr));
