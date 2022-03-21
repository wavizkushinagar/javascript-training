let count=0;
function addUser(){
    var data = document.getElementById("data").value;
    if(data !==""){
        document.getElementById("error").innerHTML="";
        document.getElementById("data").value="";
     }
    else{
        document.getElementById("error").innerHTML=" your Field Is Empty ";
        return false
    }
var list = document.getElementById("inner");


var html ='<div class="row" id="data' + count +' ">'+
 '<div class="col-md-8 ">'+
'<div class="mb-3 py-4 " >'+
'<input type="text" style="text-transform:uppercase; border-radius:0px; " class="form-control  text-center" value="'+ data +'"  placeholder="" disabled>'+
  '</div>'+
'</div>'+
'<div class="col-md-4 col-sm-4 col-xs-4 py-4 text-center">'+
'<button type="button" id="Delete'+ count +' " onclick="deleteRow(this.id)" class="btn btn-danger px-4" style="border-radius:0px;">Delete</button>'+
'</div>'+
'</div>';
list.insertAdjacentHTML("beforeend",html);
 count ++;

}


function deleteRow(deleteId){
    var dataDelete = document.getElementById(deleteId).parentNode.parentNode;
     alert(" you want to delete.. ");
    dataDelete.remove();
     
   }