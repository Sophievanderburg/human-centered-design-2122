let buttons = document.querySelectorAll(".agenda button")
let sections = document.querySelectorAll(".agenda section:nth-of-type(1n + 2")

function sectionsAgenda(){
    buttons.forEach(item =>{
        item.addEventListener('click', event =>{
            buttons.forEach(button =>{
                button.classList.remove('selected')
            })
            item.classList.add('selected')

            sections.forEach(section=>{
                section.classList.add('hidden')
            })     
            
            // check welke class er is
            if (item.innerHTML == 'Dag'){
                console.log('dag')
                sections[0].classList.remove('hidden')
            } else if(item.innerHTML == 'Week'){
                console.log('week')
                sections[1].classList.remove('hidden')
            } else{
                console.log('Maand')
                sections[2].classList.remove('hidden')
            }
        })
    })
}
sectionsAgenda()