select();
function local(){
    let id="";
    var name =document.getElementById("name").value;
    //console.log(name);
  var email =document.getElementById("email").value;
    var pass =document.getElementById("pass").value;
     var cPass =document.getElementById("cPass").value;
    var nameExp= /^[a-zA-Z ]{2,30}$/;
    var emailExp=/^[A-Za-z._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    var passExp=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var cPassExp=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    
    if(name!==""){
        document.getElementById("nameErr").innerHTML="";
        
    }
    else{
        document.getElementById("nameErr").innerHTML="enter your name";
        return false
    }
//    name validate 

if(nameExp.test(name)){
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
    document.getElementById("nameErr").innerHTML="invalid  your name";
    return false
}

// email validate
    if(email!==""){
        document.getElementById("emailErr").innerHTML="";
    }
    else{
        document.getElementById("emailErr").innerHTML="enter your email";
        return false
    }

   if(emailExp.test(email)){
    document.getElementById("emailErr").innerHTML="";
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
    document.getElementById("emailErr").innerHTML=" invalid your email";
    return false
}

//  password validate

    if(pass!==""){
        document.getElementById("passErr").innerHTML="";
    }
    else{
        document.getElementById("passErr").innerHTML="enter your password";
        return false
    }
    if(passExp.test(pass)){
        document.getElementById("passErr").innerHTML="";
        if(id==""){
            let arr =JSON.parse(localStorage.getItem('password'));
            if(arr==null){
                let data=[pass];
                localStorage.setItem('password',JSON.stringify(data));
        
            }
            else{
                arr.push(pass);
                localStorage.setItem('password',JSON.stringify(arr));
        
            }
            }
            else{
                //edit
        
            }
        document.getElementById("pass").value="";
    }
    else{
        document.getElementById("passErr").innerHTML="invalid your password";
        return false
    }

    

    if(cPass!==""){
        document.getElementById("cPassErr").innerHTML="";
    }
    else{
        document.getElementById("cPassErr").innerHTML="enter your confirm password";
        return false
    }
    if(cPassExp.test(cPass)){
        document.getElementById("cPassErr").innerHTML="";
        
    }
    else{
        document.getElementById("cPassErr").innerHTML="invalid your confirm password";
        return false
    }
      
    if(pass.match(cPass)){
        document.getElementById("cPassErr").innerHTML="";
        if(id==""){
            let arr =JSON.parse(localStorage.getItem('CPass'));
            if(arr==null){
                let data=[cPass];
                localStorage.setItem('CPass',JSON.stringify(data));
        
            }
            else{
                arr.push(cPass);
                localStorage.setItem('CPass',JSON.stringify(arr));
        
            }
            }
            else{
                //edit
        
            }
            document.getElementById("cPass").value="";

    }
    else{
        document.getElementById("cPassErr").innerHTML="password and confirm password not match";
        return false
    }

   

}


function select(){
    
    let arr =JSON.parse(localStorage.getItem('Name'));
    let arr1 =JSON.parse(localStorage.getItem('Email'));
     //let arr3 = [arr ,arr1]
  console.log(arr);
    if(arr!=null){
        let id=1;
        let html="";
        for(let k in arr){
            html=html+`<tr><td>${id}</td><td>${arr[k]}</td><td>${arr1[k]}</td><td>Edit</td></tr>`;
            id++;
        }
        
        console.log(html);
        document.getElementById("root").innerHTML=html;
    }


}