let get_bg = document.getElementById('change');
 let btn = document.getElementById('btn');
let text = document.getElementById('text');
let warning_btn = document.getElementById('warning')
 const changeBg=()=>{
 get_bg.style.backgroundColor="black";
text.innerText="welcome in waviz technology";
 }
 btn.addEventListener('click',changeBg);

 const warning_bg=()=>{
    get_bg.style.backgroundColor="yellow";
   text.innerText=" welcome in warning";
    }
    warning_btn.addEventListener('click',warning_bg);

    //danger

    let danger_btn = document.getElementById('danger');

    const danger_bg=()=>{
        get_bg.style.backgroundColor="red";
       text.innerText="welcome in danger";
        }
        danger_btn.addEventListener('click',danger_bg);
    
        // success

        let success_btn = document.getElementById('success');
        const success_bg=()=>{
            get_bg.style.backgroundColor="green";
           text.innerText="welcome in success";
            }
            success_btn.addEventListener('click',success_bg);
        