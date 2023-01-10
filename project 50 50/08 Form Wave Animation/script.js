function solution(inputArray) {
    let lengthOfArray = inputArray.length;
    if(lengthOfArray < 2){
        console.log("Elements have to be two or more")
    }
// get adjacent elements in an array of numbers and multiply
let productArray= new Array();
for(let i = 0; i < lengthOfArray - 1; i++){
    productArray.push(inputArray[i]*inputArray[i+1]);
    console.log(productArray);
}
// among those products get the biggest
let biggest = 0;
for(let i = 0; i < productArray.length; i++){
    biggest = maxNum(biggest, productArray[i]);
}

console.log(biggest);
return biggest
}

function maxNum(firstNum, secondNum){
    if(firstNum === secondNum){
        return firstNum;
    }else if(firstNum > secondNum){
        return firstNum;
    }else {
        return secondNum;
    }
        
}

solution([25, 3, 2, 2, 15, 3]);
