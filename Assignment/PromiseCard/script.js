// https://mockapi.io/projects/65decdeeff5e305f32a07e6f

var res = fetch("https://restcountries.com/v3.1/all")
res.then((data) => {
     return data.json()
})  
    .then((data1) => console.log(data1))
    .catch((data2) => console.log(data2))