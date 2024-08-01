const url= "https://geek-jokes.sameerkumar.website/api?format=json" 
const jokeContainer = document.getElementById("joke")
const btn = document.getElementById("btn")

let getJoke = async () => {
    try {
        let res = await fetch(url);
        let jokeContent = await res.json();
        jokeContainer.innerText=`${jokeContent.joke}`;
    } 
    
        catch (error) {
        console.log(error);
    }
}

btn.addEventListener("click",getJoke);