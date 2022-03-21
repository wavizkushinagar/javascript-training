
function countString(){
    var inputData = document.getElementById("data").value;
        
    let count = document.getElementById('num');
        let length = inputData.length;
        console.log(length);
        count.innerText=length;
    
}