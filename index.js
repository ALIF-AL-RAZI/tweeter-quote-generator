const api_url = 'https://api.quotable.io/random';
const qoute = document.getElementById("quote");
const author = document.getElementById("author");

async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    qoute.innerHTML = data.content;
    author.innerHTML = data.author;

}

getquote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+qoute.innerHTML+'\n              -'+ author.innerHTML, "Tweet Window", "width=450, height=600");
}