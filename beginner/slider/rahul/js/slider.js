var imgUrl = [
    "img/slider1.jpg",
    "img/slider2.jpg",
    "img/slider3.jpg"
];
var i = 0;
function slider(){
   if(i < (imgUrl.length-1)){
       i++;
   }   else{
       i=0;
   }   
    setBg();
}
setInterval(slider, 3000);

function setBg() {
    let sliderImg = document.querySelector(".img");
    sliderImg.style.transition = ".9s";
    sliderImg.style.backgroundImage = `url(${imgUrl[i]})`;
}

function changeBg(i) {
    slider();
}