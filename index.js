var qoutesApi = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
var background = document.querySelector('.main');
var fetchQuotes = () => {
    fetch(qoutesApi)
        .then(res => res.json())
        .then(data => {
            quotes = data.quotes;
        })
}

fetchQuotes()
var changeBackground = () => {
    var hexFirst = "#";
    var hexNum = Math.random().toString(16).substr(-6);
    var hexNumBack = `${hexFirst}${hexNum}`;
    background.style.background = hexNumBack;
}

document.querySelector('.btn').addEventListener('click', randomQuote = () => {
    var index = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[index];
    var quotesText = document.querySelector('.quotes-text');
    var quotesAuthor = document.querySelector('.quotes-author');
    quotesText.textContent = randomQuote.quote;
    quotesAuthor.textContent = randomQuote.author;
    changeBackground();
})