showItem("all");
function showItem(c) {
  var x, i;
  x = document.getElementsByClassName("cards");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

function addClass(e, name) {
  var i, arr1, arr2;
  arr1 = e.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      e.className += " " + arr2[i];
    }
  }
}

function removeClass(e, name) {
  var i, arr1, arr2;
  arr1 = e.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  e.className = arr1.join(" ");
}
function searchCard() {
  const input = document.getElementById("filter").value.toUpperCase();
  const cards = document.getElementsByClassName("card");
  for (let i = 0; i < cards.length; i++) {
    let title = cards[i].querySelector(".card-body h4.card-title");
    if (title.innerText.toUpperCase().indexOf(input) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}

//Model

const img = document.getElementsByTagName("img");
const images = [
  "img/cake-1.jpeg",
  "img/cake-2.jpeg",
  "img/cake-3.jpeg",
  "img/cupcake-1.jpeg",
  "img/cupcake-2.jpeg",
  "img/cupcake-3.jpeg",
  "img/doughnut-1.jpeg",
  "img/doughnut-2.jpeg",
  "img/doughnut-3.jpeg",  
  "img/sweets-1.jpeg",
  "img/sweets-2.jpeg",
  "img/sweets-3.jpeg",
];

function showModel(x) {
  document.getElementById("model").style.display = "block";
  document.getElementById("model_box").style.backgroundImage = `url(${images[x]})`;
  document.getElementById("main").style.opacity = ".5";
}
function hideModel() {
  document.getElementById("model").style.display = "none";
  document.getElementById("main").style.opacity = "1";

}

var i = 0;
function changeBg(x) {
    if (i < images.length-1) {
        i ++
    document.getElementById("model_box").style.backgroundImage = `url(${images[i]})`;
    console.log(i);
    }else{
        i = 0;
    }
}