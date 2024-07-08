//Programs in Anonymous functions and IIFE(Immediately invoked Function execution)
//a. Print Odd numbers in an array
// Anonymous
var res=function(arr){
    var odd=[];
    for (let i=0;i<arr.length;i++){
        if(arr[i] % 2 != 0 ){
            odd.push(arr[i])
        }
    }
    return odd;
}

console.log('Anonymous || Odd is : ',res([2,3,9,6,13]));

// IIFE
(function(arr){
    var odd=[];
    for (let i=0;i<arr.length;i++){
        if(arr[i] % 2 != 0 ){
            odd.push(arr[i])
        }
    }
    console.log('IIFE || Odd is : ', odd);
}) ([2,3,9,6,13])

// b. Convert all the strings to title caps in a string array

var strCaps=function(str){
    str=str.toLowerCase().split(' ')
    for (let i=0; i<str.length;i++){
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1)
        
    }
    return str.join(' ')
}

console.log(strCaps('hello World'));



(
    function(str){
        str=str.toLowerCase().split(' ')
        for (let i=0; i<str.length;i++){
            str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1)
            
        }
        console.log( str.join(' '));
    }
    
)('hello World');

// c. Sum of all numbers in an array 
//Anonymous
var sum= function(arr){
    var arrSum=0;
    for(let i=0;i<arr.length;i++){
        arrSum=arrSum+arr[i]
    }
    return arrSum
}
console.log(sum([2,3,4,5,6]));

// IIFE
(
    function(arr){
        var arrSum=0;
        for(let i=0;i<arr.length;i++){
            arrSum=arrSum+arr[i]
        }
        console.log( arrSum)
    }
)([2,3,4,5,6]);

// d. Return all prime number in an array 
 function isPrime(num){
    for(i=2;i<=Math.sqrt(num);i++){
        if (num % i == 0){
            return false
        }
    }
    return true
}

//Anonymous
var res= function(arr){
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

// IIFE
(
    function(arr){
        var prime=[];
        for(let i=0;i<arr.length;i++){
            var flag =isPrime(arr[i]);
            if (flag== true) {
                prime.push(arr[i])
         
            }
        }
        console.log('Prime is : ',prime);
    }
) ([2,3,7,11,13,12,16])


// e. Return all the palindromes in an array
// Anonymous FUnction

var res = function(arr){

    var reverseArr=arr.slice().reverse()
    for(let i=0;i< arr.length;i++){
        if(arr[i] !== reverseArr[i]){
            return 'Not Palindrome'
            break;
        } 
    }
    return 'Palindrome'
}
console.log(res([1,2,1,1]));

// IIFE
(
    function(arr){

        var reverseArr=arr.slice().reverse().join('')
        arr=arr.join('')
        if (arr == reverseArr) {
            console.log('Palindrome');
        }else{
            console.log('Not Palindrome');
        }
    }
    
) ([1,2,1,2,3,1])

// f. Return median of two sorted arrays of same size    
var res = function(arr1,arr2){
    var mergeA=[...arr1,...arr2].sort((a,b) => a - b)
    var length=mergeA.length
    var mid= Math.floor(mergeA.length / 2)
    // console.log(mergeA,length);
    if(length % 2 ==0){
        console.log('hello',Math.floor((mergeA[mid] + mergeA[mid -1 ]) /  2));
        return   Math.floor((mergeA[mid] + mergeA[mid -1 ]) /  2);
    }else{
        return mergeA[mid]
    }
   
}

console.log(res([2,3,1,5,4],[7,6,1,8,5]));

// IIFE
(
    function(arr1,arr2){
        var mergeA=[...arr1,...arr2].sort((a,b) => a - b)
        var length=mergeA.length
        var mid= Math.floor(mergeA.length / 2)
        // console.log(mergeA,length);
        if(length % 2 ==0){
            console.log(Math.floor((mergeA[mid] + mergeA[mid -1 ]) /  2));
            // return   Math.floor((mergeA[mid] + mergeA[mid -1 ]) /  2);
        }else{
             console.log(mergeA[mid]);
        }
       
    } 
    
    
)([2,3,1,5,4],[7,6,1,8,5])


//  g. Remove duplicates from an Array
// Anonymous Function
var dup = function(arr){
    var obj={};
    for(let i=0;i<arr.length;i++){
        if(obj[arr[i]]){
            obj[arr[i]]+=1
        }else{
            obj[arr[i]]=1
        }
    }
    return Object.keys(obj).map(Number)
}
console.log(dup([1,2,2,3,3,4]));

// IIFE
(
    function(arr){
        var obj={};
        for(let i=0;i<arr.length;i++){
            if(obj[arr[i]]){
                obj[arr[i]]+=1
            }else{
                obj[arr[i]]=1
            }
        }
        // console.log(obj);
         console.log(Object.keys(obj).map(Number));
    }
) ([1,2,2,5,5,4]);


// h. Rotate an array by K times  
// Anonymous Function
console.log("===================Rotate===============");
var rotate = function(arr,k){
   var rotations = k % arr.length
   var rotated = [...arr.slice(-rotations),...arr.slice(0,-rotations)]
  
return rotated   
}
console.log(rotate([1,2,3,4,5],3));

// IIFE
(
    function(arr,k){
        var rotations = k % arr.length
        var rotated = [...arr.slice(-rotations),...arr.slice(0,-rotations)]
       
     console.log(rotated);    
     }
     
)([1,2,3,4,5],3)
