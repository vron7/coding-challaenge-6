// Write a javascript function that takes an array of numbers and a target number.  
// The function should find two different numbers in the array that, when added together, give the target number.   
// For example: answer([1,2,3], 4)should return [1,3]


const answer = (arr, targetNum) => {
    for(let num of arr){
        let num2 = targetNum - num;
        if(arr.indexOf(num2) >= 0 && num !== num2)
            return [num, num2];
    }
    return [];
};

console.log(answer([2, 1, 2, 3], 4));
