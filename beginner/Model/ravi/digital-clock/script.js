

function displayTime()
{
    let dateTime= new Date();
    let hrs=dateTime.getHours();
  let date =dateTime.getDate();
//console.log(date);
let day=dateTime.getDay();
//console.log(day);
    let minute=dateTime.getMinutes();
    let second=dateTime.getSeconds();
    
    
    
   

   //let section= document.getElementById('section').innerHTML="PM";

   //console.log(section);

    let hours = document.getElementById('hours').innerHTML=hrs;
    //console.log(hours);
     if(hours >= 12)
     {
        document.getElementById('section').innerHTML="PM";
     }
     else{
         document.getElementById('section').innerHTML="AM";
     }
    document.getElementById('minutes').innerHTML=minute;
    document.getElementById('second').innerHTML=second;
}
setInterval(displayTime,1000)