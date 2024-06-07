const quote = document.getElementById("quote");
fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => quote.innerHTML =data.content
)
    .catch(error => console.error('Error:', error));