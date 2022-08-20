//Random Quote Machine

const person = document.querySelector('.person');
const quote = document.querySelector('.quote');
const btn = document.querySelector('#new-quote');


const quotes = [
    {
        quote: 'Monarchs ought to put to death the authors and instigators of war, as their sworn enemies and as dangers to their states. ',
        person: 'Elizabeth 1 '
    },
    {
        quote: 'If one cannot enjoy reading a book over and over again there is no use reading it at all. ',
        person: 'Oscar Wilde '
    },
    {
        quote: 'All you have to do is write one true sentence. Write the truest sentence you know. ',
        person: 'Enerst Hemingway '
    },
    {
        quote: 'The secret of happiness is not doing what one likes, but in liking what one does. ',
        person: 'JM Barrie '
    },
    {
        quote: 'A writer of fiction lives in fear. Each new day demands new ideas and he can never be sure whether he is going to come up with them or not.',
        person: 'Roald Dahi'
    },
    {
        quote: 'The love of books is among the choicest gifts of the gods. ',
        person: 'Arthur Conan'
    },
    {
        quote: 'Books are a uniquely portable magic.',
        person: 'Stephen King '
    },
]

btn.addEventListener('click', function(){

    let random = Math.floor( Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})

