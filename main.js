var quotes = [
    "The winner ain't the one with the fastest car; it's the one who refuses to lose.", "Years ago, you used to get out and fight and run around and chase each other with a jackhammer and stuff like that. Those were the good ol' days.", "If you ain't cheatin', you ain't tryin", "Robby’s got a little problem going faster under caution than he does under green.","Driving a race car is like dancing with a chainsaw.", "If the lion didn’t bite the tamer every once in a while, it wouldn’t be exciting.", "My grandfather is the King, my dad is the Prince. I guess that makes me the butler.", "His wife wears the firesuit in that family and tells him what to do.", "When you start thinking too much about wrecks and high speeds, it's time to quit.", "Drive it like you stole it, homie"

];

var authors = [
    "Dale Earnhardt", "Dale Earnhardt JR", "Junior Johnson", "Jeff Gordon", "Cale Yarborough", "Darrell Waltrip", "Adam Petty", "Joey Logano", "Glen Wood", "Chad Knaus"
];

document.getElementById("quoteBtn").addEventListener("click", function() {

    randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(randomQuote);

    randomAuthor = authors[Math.floor(Math.random() * authors.length)];
    console.log(randomAuthor);

    document.getElementById("quote").innerHTML = randomQuote;

    document.getElementById("author").innerHTML = randomAuthor; 
});
