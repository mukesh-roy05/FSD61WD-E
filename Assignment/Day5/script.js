// 2. Resume in jason format
var resume={
    "basics": {
		"name": "Mukesh",
		"email": "mukesh.roy@gmail.com",
		"mobile number": 9868657345,
		"summary": "Summary of Mukesh",
		"location":{
			"address" : "Chikknagamangala, Rayasandar main Road",
			"city": "Bangalore",
			"state": "Karnataka",
			"pincode": "560099",
		}
	},
	"work exprience":{
		"company name": "Capegemini india pvt ltd",
		"designation": "senior consultant",
		"work location" : "bangalore",
		"joning date" : "16-06-2023",
		"description" : "Having 10 years of experience in multiple domain including multiple technology, \
                         currently working Full Stack Developer for the banking organization.",
		"skills": "JavaScript, html,java,mysql",
	},
	"education":{
		"Highest Qualification": "Master Of Computer Application",
		"institue": "RKDF Institute of technology",
		"passing year": "2011",
		"division": "First",
		"Percentage": "70",
	},
	"language": "english, hindi"
}

console.log(resume);
console.log("===================================");

// 2. For, for of  , for in, foreach
// for
var scores = [3, 4 ,5 ,6 ,2 ,3];

for(let i=0;i<scores.length;i++){
    console.log(scores[i]);
}

// for of
console.log("===================================");
for ( element of scores){
    console.log(element);
}

console.log("===================================");
// for in in array
for ( indx in scores){
    console.log(scores[indx]);
}

console.log("===================================");
// for in in object
var object={
    'Name':"Mukesh",
    'age':35,
    'place':'Bangalore'
}

for (key in object){
    console.log(key,object[key]);
}

console.log("===================================");
//Foreach

scores.forEach((element) => {
    console.log(element);
})
console.log("========= OR ================");

scores.forEach(function(ele){
    console.log(ele);
})

console.log("===================================");
