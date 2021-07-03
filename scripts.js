let checkbox = document.querySelector('.sw_dark_mode_input')
let header = document.querySelector('header')
let presentation = document.querySelector('.presentation')
let saludo = document.querySelector('.presentation_saludo')
let description = document.querySelector('.presentation_description')

        
        checkbox.addEventListener('change',function(event){
            console.log(this.checked)
            if(this.checked){
                //body dark mode
                document.body.classList.remove('light-mode')
                document.body.classList.add('dark-mode')

                //header dark mode
                header.classList.remove('light-mode')
                header.classList.add('dark-mode')

                //header dark mode
                presentation.classList.remove('light-mode')
                presentation.classList.add('dark-mode')

                //Presentation saludo
                
                saludo.classList.add('dark-mode_text')
                saludo.classList.remove('light-mode_text')

                //Presentation description
                
                description.classList.add('dark-mode_text')
                description.classList.remove('light-mode_text')
            } else {
                document.body.classList.remove('dark-mode')
                document.body.classList.add('light-mode')

                //header dark mode
                header.classList.remove('dark-mode')
                header.classList.add('light-mode')

                //header dark mode
                presentation.classList.remove('dark-mode')
                presentation.classList.add('light-mode')

                //Presentation saludo
                
                saludo.classList.remove('dark-mode_text')
                saludo.classList.add('light-mode_text')

                //Presentation saludo
                
                description.classList.remove('dark-mode_text')
                description.classList.add('light-mode_text')
            }
        })