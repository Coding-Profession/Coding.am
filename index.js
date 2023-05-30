const generateQuoteBtn = document.getElementById("quoteBtn");
const quoteOutput = document.getElementById("quoteOutput");
const authorOutput = document.getElementById("authorOutput");

generateQuoteBtn.addEventListener("click", generateQuote);

// https://www.shopify.com/blog/motivational-quotes
const arrayOfQuotes = [
  {
    
    quote:
      "",
  },
  {
    
    quote:
      "Եթե չլինեյն խաղարկություներ արդյոք դուք կսիրեյք ProTanki Online խաղը ?",
  },
  {
    
    quote:
      "Երբ է բացվել ProTanki Online խաղը ?",
  },
  {
    
    quote: "Ինչը կցանկանայք փոխել ProTanki Online խաղում ?",
  },
  {
    
    quote:
      "Քանի տարի է որ ProTanki Online խաղը գործում է ?",
  },
  {
    
    quote:
      "ProTanki Online խաղի վերաբերյալ որ YouTuber-ի վիդեոներնեք հավանում ?",
  },
  {
    
    quote:
      "Ինչպիսի վիդեոներ կցանկանայք տեսնել armen5505 ալիքում ProTanki Online խաղի վերաբերյալ ?",
  },

  {
 quote:
      "Ինչու ProTanki Online խաղում Skiner օրինակ XT PRIME Legacy չեն ավելացնում ?"
  },
  {
   quote:
   "ProTanki online խաղում առաջին անգամ երբ է եղել Հայկական XP/BP տուրնիռ"
  },

  {
    quote:
    "ProTanki Online խաղում  ով  է առաջին հայ XP/BP խաղացողը ?"
  }
];

function generateQuote() {
  let random = Number.parseInt(Math.random() * arrayOfQuotes.length + 1);
  quoteOutput.innerHTML = `<span>${arrayOfQuotes[random].quote}</span>`;
  authorOutput.innerHTML = `<small>-${arrayOfQuotes[random].author}-</small>`;
}