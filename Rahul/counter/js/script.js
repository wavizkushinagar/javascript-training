function changeCount(e) {  
    var count =  document.getElementById("count");
    count.innerHTML = parseInt(count.innerHTML) + e;
    var value = count.innerHTML;
   
   if(value >= 1){
       count.style.color = "#08f530";
   } else if (value <= -1){
    count.style.color = "#000";
   }
   else{
    count.style.color = "#fff";
   }

}
