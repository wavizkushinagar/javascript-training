var rate1 = document.getElementById('rate1');
var rate2 = document.getElementById('rate2');
var rate3 = document.getElementById('rate3');
var rate4 = document.getElementById('rate4');
var rate5 = document.getElementById('rate5');
var rate6 = document.getElementById('rate6');
var score = document.getElementById('score');
var count = 0;


setInterval(function(){
var random = (Math.floor(Math.random()*6)+1)
var rat ="rate" + random
//console.log(rat);
var ra = eval(rat)
//console.log(ra)
ra.classList.add("animate")
setTimeout(function(){
    ra.classList.remove("animate")
},1000)
ra.onclick = function(){

    count++
    score.innerText = "count"
}
},1000)