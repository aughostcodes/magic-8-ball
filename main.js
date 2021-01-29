'use strict';

const askButton = document.querySelector('.ask');
const display = document.querySelector('.display');

const responses = [
    'As I see it, yes.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    'Don\'t count on it.',
    'It is certain.',
    'It is decidedly so.',
    'Most likely.',
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Outlook good.',
    'Reply hazy, try again.',
    'Signs point to yes.',
    'Very doubtful.',
    'Without a doubt.',
    'Yes.',
    'Yes -- definitely.',
    'You may rely on it.'
]

function roll() {
    let max = 19;
    let min = 0;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function respond() {
    display.textContent = responses[roll()];
}

function shakeDisplayAnimation() {
    display.classList.add('animated');
    display.classList.add('shake');
}

function stopShakeAnimation() {
    display.classList.remove('animated');
    display.classList.remove('shake');
}

askButton.addEventListener('click', respond);
askButton.addEventListener('click', shakeDisplayAnimation);
