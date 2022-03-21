var cl = document.getElementById('cel');

var fht = document.getElementById('Fht');

cl.addEventListener('input',function(){
     let val = this.value;
     let farm = (val * 9/5) + 32;
     fht.value = farm;
})
fht.addEventListener('input',function(){
    let val = this.value;
    let farm = (val * 9/5) + 32;
    cl.value = farm;

})
