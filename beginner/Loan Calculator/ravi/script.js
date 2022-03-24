function loanInterest(){
  let amount =document.getElementById('amount').value;
  let interest_rate =document.getElementById('interest').value;
  let month =document.getElementById('month').value;
  let interest= ( amount*(interest_rate*0.01)) / month;
   // monthlypay.innerText = interest

let payMonth = (( amount * month) + interest).toFixed(2);
    
    document.getElementById('monthlyPay').innerHTML=payMonth;
  //console.log(payMonth);

    
}