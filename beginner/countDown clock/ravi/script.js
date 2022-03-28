
const countDownd =()=>{
    let d = new Date();
 let days =d.getDay();
 let hours  =d.getHours();
 let mint =d.getMinutes();
 let second =d.getSeconds();

document.getElementById('day').innerText=days;
document.getElementById('hours').innerHTML=hours;
document.getElementById('mint').innerHTML=mint;
document.getElementById('second').innerHTML=second;

}
setInterval(countDownd,1000);