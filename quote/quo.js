
let quotes = [
    { owner: "-George Eliot", quote: "It is never too late to be what makes have been." },
    { owner: "-Mahatma Gandhi", quote: "Be the change that you wish to see in the world." },
    { owner: "-Steve Jobs", quote: "Your time is limited, so don’t waste it living someone else’s life." },
    { owner: "-Nelson Mandela", quote: "It always seems impossible until it’s done." },
    { owner: "-Oscar Wilde", quote: "Be yourself; everyone else is already taken." },
    { owner: "-Mark Twain", quote: "Focus more on your desire than on your doubt, and the dream will take care of itself." },
    { owner: "-Jack Kerouac", quote: "One day I will find the right words, and they will be simple." },
    { owner: "-Eleanor Roosevelt", quote: "The future belongs to those who believe in the beauty of their dreams." },
    { owner: "-William Faulkner", quote: "Get it down.Take chance.it may be bad,but It's th way you can do anything really good."},
    { owner: "-Henry Ford", quote: "Whether you think you can or you think you can’t, you’re right." }
];
function add(params) {
    let new_quote = document.getElementById("new_quote").value
    let name = document.getElementById("name").value
    let new_quote_need_to_add = { owner: name, quote: new_quote }
    if (new_quote_need_to_add != "") {
        quotes.push(new_quote_need_to_add)
        console.log(quotes);
    }

}
function generate() {
    let quote = document.getElementById("quote")
    let owner = document.getElementById("owner")
    let randomThought = quotes[Math.floor(Math.random() * quotes.length)];
    owner.textContent = randomThought.owner
    quote.textContent = randomThought.quote
    console.log(randomThought.owner, randomThought.quote);
}
function showall(params) {
    let show = document.getElementById("show")
    Array = quotes.map(x => `<h3> ${x.owner}=${x.quote}</h3>`).join("")
    show.innerHTML = Array
}