let id='';

function local(){
    var name =document.getElementById("name").value;
  var email =document.getElementById("email").value;
  var massage =document.getElementById("massage").value;
    var nameExp= /^[a-zA-Z ]{2,30}$/;
    var emailExp=/^[A-Za-z._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    
    if(name!==""){
        document.getElementById("nameErr").innerHTML="";
        
    }
    else{
        document.getElementById("nameErr").innerHTML="enter your name";
        document.getElementById("success").innerHTML="";
        return false
    }

   if(nameExp.test(name)){
    document.getElementById("nameErr").innerHTML="";
    //localStorage.setItem('Name',name);
    document.getElementById("nameErr").innerHTML="";
    if(id==""){
    let arr =JSON.parse(localStorage.getItem('Name'));
    if(arr==null){
        let data=[name];
        localStorage.setItem('Name',JSON.stringify(data));

    }
    else{
        arr.push(name);
        localStorage.setItem('Name',JSON.stringify(arr));
   }
    }
    else{
        //edit

    }
    var name =document.getElementById("name").value="";

   }
   else{
    document.getElementById("nameErr").innerHTML="invalid your name";
    return false
   }

    //email
    if(email!==""){
        document.getElementById("emailErr").innerHTML="";

    }
    else{
        document.getElementById("emailErr").innerHTML="enter your email";
        return false
    }

    if(emailExp.test(email)){
        document.getElementById("emailErr").innerHTML="";
       // localStorage.setItem('email',email);
    if(id==""){
        let arr =JSON.parse(localStorage.getItem('Email'));
        if(arr==null){
            let data1=[email];
            localStorage.setItem('Email',JSON.stringify(data1));
    
        }
        else{
            arr.push(email);
            localStorage.setItem('Email',JSON.stringify(arr));
    
        }
        }
        else{
            //edit
    
        }
    document.getElementById("email").value="";
       }
       else{
        document.getElementById("emailErr").innerHTML="invalid your email";
        return false
       }
    
    //massage
    if(massage!==""){
        document.getElementById("massageErr").innerHTML="";
        //localStorage.setItem('massage',massage);
    if(id==""){
        let arr =JSON.parse(localStorage.getItem('Massage'));
        if(arr==null){
            let dataMassage=[massage];
            localStorage.setItem('Massage',JSON.stringify(dataMassage));
    
        }
        else{
            arr.push(massage);
            localStorage.setItem('Massage',JSON.stringify(arr));
    
        }
        }
        else{
            //edit
    
        }
    document.getElementById("massage").value="";
    }
    else{
        document.getElementById("massageErr").innerHTML="enter your massage";
        return false
    }

    document.getElementById("success").innerHTML="data inserted";



}
