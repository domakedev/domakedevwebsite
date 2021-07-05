let checkbox = document.querySelector('.sw_dark_mode_input')

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