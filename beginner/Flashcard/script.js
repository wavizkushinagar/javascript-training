
let display =()=>{
 var add1 = document.getElementById("add_section_2");
 add1.style.display = "none"
 let answer_div =  document.getElementById("add_section_3");
 answer_div.style.display = "none"
 let edit =  document.getElementById("edit1");
 edit.style.display = "none";
}
display()

const add = () =>{
    let add =  document.getElementById("add_section_2");
       add.style.display= "block";
  
  }
  
  const back =()=>{
    let back = document.getElementById("add_section_2"); 
     back.style.display = "none";

  }


  const addItem = ()=>{
    let answer_div =  document.getElementById("add_section_3");
    answer_div.style.display = "block";
   
      let question =  document.getElementById("question").value;
     // console.log(question)
      let answer =  document.getElementById("answer").value;

      if(question!=="" && answer!==""){
        let question_1 =  document.getElementById("question_1");
        question_1.innerHTML=question;
     let answer_1 =  document.getElementById("answer_1");
        answer_1.innerText=answer;

        document.getElementById("question").value="";
        document.getElementById("answer").value="";
      }else{
          alert("your Field is empty..");
          let answer_div =  document.getElementById("add_section_3");
         answer_div.style.display = "none"
      }
     

} 


const hide = ()=>{
    let answer_2 =  document.getElementById("answer_1");
    answer_2.style.display = "none"
    }

    const show = ()=>{
        let answer_2 =  document.getElementById("answer_1");
    answer_2.style.display = "block"

    }


    const Edit = ()=>{
     document.getElementById("edit1").style.display = "block";
     document.getElementById("answer_1").innerText="";
    }

    let btn =  document.getElementById("new");
    btn.addEventListener('click', function(){
      
    let newData =  document.getElementById("answer_1").innerText;
      if(newData !==""){
        document.getElementById("answer_1").innerText;
        
      }else{
        let data =  document.getElementById("edit").value;
        document.getElementById("answer_1").innerHTML=data;
        document.getElementById("edit").value="";
      }
    // newData.innerText=data;
    //   //console.log(data)
    //  // console.log(newData)

    })


    const Delete = ()=>{
        let answer_div =  document.getElementById("add_section_3");
         answer_div.style.display = "none"
         document.getElementById("answer_1").innerText="";
         document.getElementById("question_1").innerText=""
    }