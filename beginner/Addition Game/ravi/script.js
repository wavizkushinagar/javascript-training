
var n1 = document.getElementById('n1');
var n2 = document.getElementById('n2');
var n1x = Math.floor((Math.random() * 10) + 1);
var n1x1 = Math.floor((Math.random() * 20) + 1);
 n1.innerText=n1x;
 n2.innerText=n1x1;
 
function add(){
    var a = document.getElementById('n1').innerText;
   var b = document.getElementById('n2').innerText;
   //console.log(a);
  var total = document.getElementById('total').value;
  
  // console.log(b);

  var c = Number(a) + Number(b) ;

  console.log(c);
  var total1 = Number(total);
   //console.log(typeof(total1));

   if(total!==""){
       document.getElementById('error').innerText="";
       if(c == total1){
        var winner = document.getElementById('winner');
        winner.style.display='none';
        var image =document.querySelector('.winner');
    image.style.display='block';
    document.querySelector('body').style.backgroundColor='green';

    }
    else{
        var winner = document.getElementById('winner');
        winner.style.display='none';
        var image1 =document.querySelector('.lose');
        image1.style.display='block';
        document.querySelector('body').style.backgroundColor='red';
    }
       
   }
   else{
       document.getElementById('error').innerText="please enter value";
       return false
   }
     
}