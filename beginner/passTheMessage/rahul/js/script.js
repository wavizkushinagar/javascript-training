const btn = document.querySelector("button");
const result = document.querySelector("h2");

btn.addEventListener("click", () => {
  var message = document.querySelector("input").value;

  if (message == "") {
    showError();
  } else {
    result.innerText = message;
  }
});

function showError() {
    const para = document.createElement("p");
    const node = document.createTextNode("Please Type Your message.");
    para.appendChild(node);
    para.style.color = "red";
    const card = document.querySelector(".card");
    card.appendChild(para);
    function hideError() {
        para.style.display = "none";    
    }
    setTimeout(hideError, 2000);
}
