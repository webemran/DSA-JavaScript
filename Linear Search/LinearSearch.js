let arr=['20','10','100','60','70'];
let key=60;

function LinearSearch(arr,key){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==key){
            return `${key} Given Number Is Found at index ${i}`
        }
    }
    return `Number is not found`
}

let result=LinearSearch(arr,key);
console.log(result);