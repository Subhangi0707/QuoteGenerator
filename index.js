const quotes = [{
    quote: `Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshine.`,
    author: `â€• Jack Ma `
}, {
    quote: `Be yourself; everyone else is already taken.`,
    author: `â€• Oscar Wilde`
}, {
    quote: `A room without books is like a body without a soul.`,
    author: `â€• Marcus Tullius Cicero`
}, {
    quote: `You only live once, but if you do it right, once is enough.`,
    author: `â€• Mae west `
}, {
    quote: `Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.`,
    author: `â€• Muhammad Waseem`
}, {
    quote: `How you look at it is pretty much how you'll see it`,
    author: `â€• Steve Jobs`
}, {
    quote: `The most disastrous thing that you can ever learn is your first programming language.`,
    author: `â€• Alan Kay`
}, {
    quote: `In three words I can sum up everything I've learned about life: it goes on.`,
    author: `â€• Robert Frost`
}, {
    quote: `i am committed to push my branch to the master.`,
    author: `â€• Halgurd Hussein`
}, {
    quote: `Be the change that you wish to see in the world.`,
    author: `â€• Mahatma Gandhi`
}, ]
// New Quote Button
const quoteBtn = document.getElementById('quote-btn');
// Get Quote and author Section
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
// Event Handler
quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})