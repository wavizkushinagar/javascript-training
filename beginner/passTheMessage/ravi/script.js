
 function passMassage(){
     let inputData =document.getElementById('inputData').value;
     if(inputData !==""){
        document.getElementById("error").innerHTML="";
        document.getElementById("inputData").value="";
     }
    else{
        document.getElementById("error").innerHTML=" Your Field Is Empty ";
        return false
    }
    document.getElementById('new_massage').innerHTML=inputData;
 }