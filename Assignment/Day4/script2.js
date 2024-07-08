// 1 - Arrow Functions
// a. Odd numbers

var res=(arr) => {
    var odd=[];
    for (let i=0;i<arr.length;i++){
        if(arr[i] % 2 != 0 ){
            odd.push(arr[i])
        }
    }
    return odd;
}

console.log('Arrow || Odd is : ',res([2,3,9,6,13]));

// b. Convert all the strings to title caps in a string array
console.log("\n  Convert all the strings to title caps in a string array"); 
var strCaps=(str) => {
    str=str.toLowerCase().split(' ')
    for (let i=0; i<str.length;i++){
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1)
        
    }
    return str.join(' ')
}

console.log(strCaps('hello World'));



// c. Sum of all numbers in an array 
//Arrow
var sum= (arr) => {
    var arrSum=0;
    for(let i=0;i<arr.length;i++){
        arrSum=arrSum+arr[i]
    }
    return arrSum
}
console.log(sum([2,3,4,5,6]));


// d. Return all prime number in an array 
function isPrime(num){
    for(i=2;i<=Math.sqrt(num);i++){
        if (num % i == 0){
            return false
        }
    }
    return true
}

//Arrow Function
var res= (arr) => {
    var prime=[];
    for(let i=0;i<arr.length;i++){
        var flag =isPrime(arr[i]);
        if (flag) {
            prime.push(arr[i])
     
        }
    }
    return prime
}

console.log('Prime is : ',res([2,3,7,11,13,12,16]));



// e. Return all the palindromes in an array
// Arrow FUnction

var res = (arr) => {

    var reverseArr=arr.slice().reverse()
    for(let i=0;i< arr.length;i++){
        if(arr[i] !== reverseArr[i]){
            return 'Not Palindrome'
            break;
        } 
    }
    return 'Palindrome'
}
console.log(res([1,2,1]));