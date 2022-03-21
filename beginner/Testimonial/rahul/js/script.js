var quotes = [
    {
        "img" : "img/one.png",
        "quote" : "It's true, you can never eat a pet you name. ..",
        "writer": "One"
    },
    {
        "img" : "img/two.png",
        "quote" : "I was a dummy in school. ...",
        "writer": "Two"
    },
    {
        "img" : "img/three.png",
        "quote" : "Colloquial poetry is to the real art as the barber's wax dummy is to sculpture. ...",
        "writer": "Three"
    }
]

const mainQuote = document.querySelector("p");
const mainImg = document.querySelector("img");
const mainWriter = document.querySelector("h2");
var i = 0;
changeTestimonial();
 function ChangeIndex() {
     if(i< (quotes.length-1)){
         i++;
     }
     else{
         i=0;
     }
     changeTestimonial();
 }
 setInterval(ChangeIndex, 2000);

    function changeTestimonial() {
        mainImg.setAttribute("src", `${quotes[i].img}`) ;
        mainQuote.innerText = `${quotes[i].quote}`;
        mainWriter.innerText = `${quotes[i].writer}`;
    }

