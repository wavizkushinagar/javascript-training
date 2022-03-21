

function addItem() {
    document.getElementById("error").innerHTML = "";
    let name = document.getElementById("item").value;
    if (name=='') {
        document.getElementById("error").innerHTML = "Please Inter The Value";
    }else{
        let uItem = document.getElementById("uItem");
        let li = document.createElement('li');
        li.textContent = name;
        let a = document.createElement('a');
        a.textContent="X";
        a.href="javascript:void(0)";
        a.className= "remove";
        li.appendChild(a);
        let pos = uItem.firstElementChild;
        if(pos== null){
         uItem.appendChild(li);
        }else{
            uItem.insertBefore(li, pos);
        }
    }
    document.getElementById("item").value = "";
}
let btn = document.querySelector('ul');
btn.addEventListener('click', function (e) {
    let uItem = document.getElementById("uItem");
    let li = e.target.parentNode;
    uItem.removeChild(li);
})