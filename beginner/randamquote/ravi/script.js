
let text= document.getElementById("text");
let btn = document.getElementById("button1");
const quote =()=>{
     //no=rem;
    let rem= Math.floor(Math.random()*100);

    fetch("https://type.fit/api/quotes")
  .then((response)=>{
    return response.json();
  })
  .then((data)=> {
      text.innerHTML=data[rem].text;


  });
}

btn.addEventListener('click',quote);
