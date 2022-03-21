const button = document.getElementById("btn");
const colorCode = document.querySelector('h2');
const body = document.querySelector('body');

button.addEventListener('click',()=> {
    let color = '#';
    color += Math.random().toString(16).slice(2,8);
    body.style.backgroundColor = color;
    colorCode.innerText = color;
});
