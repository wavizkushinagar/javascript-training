const convert =()=>{
let foot = document.getElementById('foot').value;
let inche = document.getElementById('inche').value;
let cmFoot = Number(foot)*30.48;
let cmInche =Number(inche)*2.54;
let total = cmFoot + cmInche;
if(foot=="" || inche=="") {
   
   document.getElementById('convert').innerHTML="Your Field Is Empty..";
}
else{
     document.getElementById('convert').innerHTML= `${total} CM`;
}


}