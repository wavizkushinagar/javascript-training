
let cake = document.getElementById('cake1');
let cake1 = document.getElementById('cake4');
let btn1 = document.getElementById('cake4_span');
const cake_cake1 =()=>{
   cake1.style.display="block";
}
cake.addEventListener('click',cake_cake1);

const cake_cake1_none =()=>{
   cake1.style.display="none";
}
btn1.addEventListener('click',cake_cake1_none);


let cake1_1 = document.getElementById('cake2');
let cake2 = document.getElementById('cake5');
let btn2 = document.getElementById('cake5_span');

const cake_cake1_1 =()=>{
   cake2.style.display="block";
}
cake1_1.addEventListener('click',cake_cake1_1);

const cake_cake2_none =()=>{
   cake2.style.display="none";
}
btn2.addEventListener('click',cake_cake2_none);


let cake1_2 = document.getElementById('cake3');
let cake3 = document.getElementById('cake6');
let btn3 = document.getElementById('cake6_span');
const cake_cake1_2 =()=>{
   cake3.style.display="block";
}
cake1_2.addEventListener('click',cake_cake1_2);

const cake_cake3_none =()=>{
   cake3.style.display="none";
}
btn3.addEventListener('click',cake_cake3_none);

