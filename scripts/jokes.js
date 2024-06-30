const jokes = [
    {
        text: '🙌',
        author: 'Ivan'
    },
    {
        text: '👍',
        author: 'Ivan'
    },
    {
        text: '😂',
        author: 'Ivan'
    },
    {
        text: '😎',
        author: 'Ivan'
    },
    {
        text: '😁',
        author: 'Ivan'
    },
    {
        text: '👌',
        author: 'Ivan'
    }
]
function getJokes() {
    const number = Math.floor(Math.random()* jokes.length);
    document.getElementById('jokesNum').innerHTML = number + 1; 
    document.getElementById('jokesText').innerHTML = jokes [number]['text']

}
