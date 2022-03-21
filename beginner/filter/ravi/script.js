let all = document.getElementById('all1');

all.addEventListener('click',allData);
function allData(){
    let dis=document.getElementById('doughnut');
         dis.style.display="block";
         document.getElementById('cake').style.display="block";
         document.getElementById('sweet').style.display="block";
}

 let cake = document.getElementById('cakes');
 cake.addEventListener('click',allCake);
 function allCake(){
    document.getElementById('cupCake').style.display="none";
    document.getElementById('sweet').style.display="none";
    document.getElementById('doughnut').style.display="none";
    document.getElementById('cake').style.display="block";
 }


 let cupCake = document.getElementById('cupCakes');
 cupCake.addEventListener('click',cupData);
 function cupData(){
    document.getElementById('cupCake').style.display="block";
    document.getElementById('sweet').style.display="none";
    document.getElementById('doughnut').style.display="none";
    document.getElementById('cake').style.display="none"; 
 }
 
 let sweet = document.getElementById('sweets');
 sweet.addEventListener('click',sweetData);
 function sweetData(){
    document.getElementById('cupCake').style.display="none";
    document.getElementById('sweet').style.display="block";
    document.getElementById('doughnut').style.display="none";
    document.getElementById('cake').style.display="none"; 
 }

 let doughnut = document.getElementById('doughnuts');
 doughnut.addEventListener('click',doughnutData);
 function doughnutData(){
    document.getElementById('cupCake').style.display="none";
    document.getElementById('sweet').style.display="none";
    document.getElementById('doughnut').style.display="block";
    document.getElementById('cake').style.display="none"; 
 }