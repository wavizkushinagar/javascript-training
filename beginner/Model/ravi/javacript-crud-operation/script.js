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
 '<div class="col-md-6 ">'+
'<div class="mb-3 py-4 " >'+
    '<input type="text" style="text-transform:uppercase; border-radius:0px; " class="form-control  text-center" value="'+ data +'"  placeholder="" disabled>'+
  '</div>'+
'</div>'+
'<div class="col-md-2 col-sm-4 col-xs-4 py-4">'+
'<button type="button" id="edit'+ count +' " onclick="edit(this.id)"  class="btn btn-success px-5" style="border-radius:0px;">Edit</button>'+
'</div>'+
'<div class="col-md-2 col-sm-4 col-xs-4 py-4">'+
'<button type="button" id="update'+ count +' " onclick="update(this.id)"  class="btn btn-success px-5" style="border-radius:0px;">Update</button>'+
'</div>'+
'<div class="col-md-2 col-sm-4 col-xs-4 py-4">'+
'<button type="button" id="Delete'+ count +' " onclick="deleteRow(this.id)" class="btn btn-danger px-4" style="border-radius:0px;">Delete</button>'+
'</div>'+
'</div>';


 list.insertAdjacentHTML("beforeend",html);
 count ++;

 
     
}

function edit(editId){
    var dataEdit = document.getElementById(editId).parentNode.parentNode;
    var child= dataEdit.firstChild.firstChild.firstChild;
    child.removeAttribute('disabled');
       //child.setAttribute('disabled','disabled')
   //console.log(child);

}

function update(updateId){
    var updateEdit = document.getElementById(updateId).parentNode.parentNode;
    var child= updateEdit.firstChild.firstChild.firstChild;
    child.setAttribute('disabled','disabled');
   }
function deleteRow(deleteId){
 var dataDelete = document.getElementById(deleteId).parentNode.parentNode;
  alert(" you want to delete.. ")
 dataDelete.remove();
  
}