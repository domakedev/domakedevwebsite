let checkbox = document.querySelector('.sw_dark_mode_input')
var Andi

checkbox? Andi= 1 : Andi = 0;

if (Andi==1) {
    console.log("Andi es 1");
} else {
    console.log("Andi es 0");
}

setTimeout(function(){
    if (checkbox.checked==true) {
        document.body.classList.remove('light-mode')
        document.body.classList.add('dark-mode')
    } else {
        document.body.classList.remove('dark-mode')
        document.body.classList.add('light-mode')
    }
},0)

checkbox.addEventListener('change', function(event){
    console.log(this.checked);
    if (this.checked) {
        document.body.classList.remove('light-mode')
        document.body.classList.add('dark-mode')
    } else {
        document.body.classList.remove('dark-mode')
        document.body.classList.add('light-mode')
    }
})