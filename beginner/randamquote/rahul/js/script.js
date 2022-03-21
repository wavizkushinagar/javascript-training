var quotes = [
  {
    quote:
      "Freedom is never dear at any price. It is the breath of life. What would a man not pay for living?",
    writer: "Mahatma Gandhi",
  },
  {
    quote:
      "Dushman ki goliyon ka hum samna karenge, Azad hee rahein hain, Azad hee rahenge",
    writer: "Chandra Shekhar Azad",
  },
  {
    quote:
      "Sarfaroshi ki tamanna ab hamare dil me hai, dekhna hai zor kitna baazu-e-qaatil me hai",
    writer: "Ramprasad Bismil",
  },
  {
    quote:
      "Tum Muje Khoon Do, Mai Tumhe Azadi Dunga",
    writer: "Subhash Chandra Bose",
  },
  {
    quote:
      "Swaraj is my birthright and I shall have it",
    writer: "Bal Gangadhar Tilak",
  },
  {
    quote:
      "Inquilab Zindabad",
    writer: "Bhagat Singh",
  },
  {
    quote:
      "  Jai Jawan Jai Kisaan",
    writer: "Lal Bahadur Shastri",
  },

];


const button = document.querySelector("button");
const showQuotes = document.querySelector('p');
const showWriter = document.querySelector('h6');
button.addEventListener('click',()=>{
    let getQuotes = Math.floor(Math.random()*quotes.length)
    showQuotes.innerText= quotes[getQuotes].quote;
    showWriter.innerText= quotes[getQuotes].writer;
    button.innerText = "Next Quotes";
})
