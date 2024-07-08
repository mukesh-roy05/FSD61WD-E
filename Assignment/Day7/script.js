// Day7 Task
// https://restcountries.com/v3.1/all
var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);

// a. Get all countries of Asia continent / regions using filter funcstions

    var filter_data= result.filter((ele) => ele.continents == "Asia" || ele.region == "Asia" )
    console.log(filter_data);


    //b. Get all the countries with a population of less than 2 lakhs using Filter function
    var  Poplation_data = result.filter((ele) => ele.population < 200000)
    console.log(Poplation_data);

    //c. Print the following details name, capital, flag using forEach function
     result.forEach((ele) => 
        console.log(ele.name.common,ele.capital,ele.flag)
    );

    // d .Print the total population of countries using reduce function

     var total_population = result.reduce((acc,cv) => acc + cv.population,0);
        console.log(total_population);

     // e . Print the country which use US Dollars as currency

    // var currency_data = result.filter ((ele) =>{
    //     return ele.currencies && ele.currencies.USD
    // }
    //  )
    // console.log(currency_data);
    console.log("============================CURRENCY+++++++");
    var cur_data= result.forEach((ele) => {
        
        var cur=ele.currencies
        
        // for (i in cur){
        //     if (i === "USD") console.log( i);
        // }
        
    })

    
}





