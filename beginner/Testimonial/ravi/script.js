var quotes = [
    {
        "img" : "./img/one.png",
        "quote" : "It's true, you can never eat a pet you name. ..",
        "writer": "One"
    },
    {
        "img" : "./img/two.png",
        "quote" : "I was a dummy in school. ...",
        "writer": "Two"
    },
    {
        "img" : "./img/three.png",
        "quote" : "Colloquial poetry is to the real art as the barber's wax dummy is to sculpture. ...",
        "writer": "Three"
    }
]

//console.log(quotes.length);
var image =document.querySelector('img');
 var topic =document.querySelector('h2');
var paragraph =document.querySelector('p');

    var i=0;
   // console.log(quotes.length);
   upload();
function text(){
    
   if(i< (quotes.length-1)){
    i++;
}
else{
    i=0;
}
        
upload();
}
setInterval(text,2000);


function upload(){
    image.setAttribute('src',`${quotes[i].img}`);
        topic.innerText=`${quotes[i].writer}`;
        paragraph.innerText=`${quotes[i].quote}`;
        
}