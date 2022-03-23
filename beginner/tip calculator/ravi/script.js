
function tipCalculator(){
var amout =document.getElementById('bill').value;
//console.log(amout);
var people = document.getElementById('people').value;
var percentage = document.getElementById('percentage').value;

 //console.log(percentage);
     let gettipamout = amout*(percentage/100);
      let getTotal = gettipamout + Number(amout);
      let eachDivide = Number(getTotal) / people;
      let total = document.getElementById('total');
      let tipAmount = document.getElementById('tipAmount');
      let person = document.getElementById('person')
      
      document.getElementById('text').style.display="block";
     total.innerText=getTotal;
     tipAmount.innerText=gettipamout;
     person.innerText=eachDivide;
    
}


