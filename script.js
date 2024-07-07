const generateBtn = document.querySelector('.generate-btn');
const quoteText = document.querySelector('.quote');
const quoteBox = document.querySelector('.quote-box');

const quotes = [
    "Code is like humor. When you have to explain it, it's not funny anymore.",
    "Programming is like sex. One mistake and you have to support it for the rest of your life.",
    "I'm not a great programmer; I'm just a good programmer with great habits.",
    "The best way to predict your future is to create it.",
    "Code is not just about solving problems, it's about creating something that will outlast you.",
    "The only way to do great work is to love what you do.",
    "The biggest risk is not taking any risk...",
    "The best way to get started is to quit talking and begin doing.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "The only thing I know is that I know nothing.",
    "Experience is the name everyone gives to their mistakes.",
    "First, solve the problem. Then, write the code.",
    "In order to be irreplaceable, one must always be different.",
    "Java is to JavaScript what car is to Carpet.",
    "Sometimes it's better to leave something alone, to pause, and that's very true of programming.",
    "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.",
    "The best performance improvement is the transition from the nonworking state to the working state.",
    "Programming isn't about what you know; it's about what you can figure out.",
    "The only way to learn a new programming language is by writing programs in it.",
    "Code never lies, comments sometimes do.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "The most disastrous thing that you can ever learn is your first programming language.",
    "You might not think that programmers are artists, but programming is an extremely creative profession. It's logic-based creativity.",
    "Walking on water and developing software from a specification are easy if both are frozen.",
    "There are two ways to write error-free programs; only the third one works.",
    "The trouble with programmers is that you can never tell what a programmer is doing until it's too late.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Optimism is an occupational hazard of programming: feedback is the treatment.",
    "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
    "It’s not a bug; it’s an undocumented feature.",
    "One man's crappy software is another man's full-time job.",
    "Programming can be fun, so can cryptography; however, they should not be combined.",
    "To iterate is human, to recurse divine.",
    "Don't comment bad code - rewrite it.",
    "Any code of your own that you haven’t looked at for six or more months might as well have been written by someone else.",
    "Code is like a poem; it has to follow strict rules in order to make any sense.",
    "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
    "Copy-and-Paste was programmed by programmers for programmers actually.",
    "Make it work, make it right, make it fast.",
    "Simplicity is the soul of efficiency.",
    "Programs must be written for people to read, and only incidentally for machines to execute.",
    "Before software can be reusable it first has to be usable.",
    "There are only two kinds of programming languages: those people always bitch about and those nobody uses.",
    "The cheapest, fastest, and most reliable components are those that aren’t there.",
    "Program testing can be used to show the presence of bugs, but never to show their absence!",
    "Programming is thinking, not typing.",
    "Programs are meant to be read by humans and only incidentally for computers to execute.",
    "Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter.",
    "Beware of bugs in the above code; I have only proved it correct, not tried it.",
    "In software, the most beautiful code, the most beautiful functions, and the most beautiful programs are sometimes not there at all.",
];

function displayRandomQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteText.textContent = randomQuote;
}

generateBtn.addEventListener('click', displayRandomQuote);
quoteBox.addEventListener('click', displayRandomQuote);
