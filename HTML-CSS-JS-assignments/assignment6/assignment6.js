fetch("https://api.quotable.io/random")
.then((response)=>response.json())
.then((data)=>{
    document.querySelector("h1").innerHTML = data.content;
})