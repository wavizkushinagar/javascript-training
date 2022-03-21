  showItem("all");
 function showItem(c) {
     var x, i;
     x = document.getElementsByClassName("cards");
     if(c == "all") c = "";
     for(i = 0; i < x.length; i++){
         removeClass(x[i], "show");
         if(x[i].className.indexOf(c) > -1) addClass(x[i], "show");
     }
 }

 function addClass(e, name) {
     var i, arr1, arr2;
     arr1 = e.className.split(" ");
     arr2 = name.split(" ");
     for(i=0; i < arr2.length; i++){
         if(arr1.indexOf(arr2[i]) == -1){
             e.className += " " + arr2[i];
         }
     }
 }

 function removeClass(e, name) {
     var i, arr1, arr2;
     arr1 = e.className.split(" ");
     arr2 = name.split(" ");
     for(i=0; i < arr2.length; i++){
         while(arr1.indexOf(arr2[i]) > -1){
             arr1.splice(arr1.indexOf(arr2[i]) ,1);
         }
     }
     e.className = arr1.join(" ");
 }
 function searchCard() {
    const input = document.getElementById("filter").value.toUpperCase();
    const cards= document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector(".card-body h4.card-title");
        if (title.innerText.toUpperCase().indexOf(input) > -1) {
            cards[i].style.display = "";
        }else{
            cards[i].style.display = "none";
        }        
    }
}