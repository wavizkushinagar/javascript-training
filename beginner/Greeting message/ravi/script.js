function clock (){

    var d = new Date();
   var hours = d.getHours();
    var mint =d.getMinutes();
    var second =d.getSeconds();

    let mid_day = (hours >= 12) ? "PM" : "AM";

    document.getElementById('hours').innerHTML=hours;
    document.getElementById('mint').innerHTML=mint;
    document.getElementById('second').innerHTML=second;
    document.getElementById('mid_day').innerHTML=mid_day;
    //console.log(mid_day);
    if(hours < 12){
    document.getElementById('greeting').innerText="Good Morning";
     }
     if(hours >= 12 && hours <= 18){
        document.getElementById('greeting').innerText="Good Afternoon";
      }
      if(hours >= 18 && hours <= 24){
        document.getElementById('greeting').innerText="Good Afternoon";
      }

}
setInterval(clock,1000);