console.log("// Compare Two Jason have same properties without order" );
let obj1 = { name: "Person 1", age:5};
let obj2 = { age:5,name: "Person 1"};

var flag=true;

if (Object.keys(obj1).length === Object.keys(obj2).length){ 
    
    // console.log(key1,key2);
    // for(let i=0;i<key1.length;i++){
    //     if(key2.includes(key1[i])){  
    //         // Compare objects keys -key1 & key2 - checking if element of key1 exist in key2  
    //         continue
    //     }else flag=false;
    // }

    for(key in obj1){
        if (obj1[key] == obj2[key]){
            // Compare objects values - if values matched then flag is true else false 
            // console.log(key,obj1[key] , obj2[key]);
            continue;
        } else flag=false;
    }
}else{
    flag=false
}


if(flag)
{
    console.log('Matched');
} else {
    console.log('Not Matched');
}