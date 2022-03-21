let light_of = document.getElementById('light_of');
let light_on = document.getElementById('light_on');

let btn_of = document.getElementById('of');
let btn_on = document.getElementById('on');

const light_on1 =()=>{
 light_on.style.display="block";
 light_of.style.display="none";
 
}
btn_on.addEventListener('click',light_on1);



const light_of1 =()=>{
    light_on.style.display='none';
    light_of.style.display='block';
   }
   btn_of.addEventListener('click',light_of1);