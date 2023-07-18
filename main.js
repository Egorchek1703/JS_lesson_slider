let slideIndex = 1

function check (){
    if(slideIndex <= 0){
        slideIndex = 3
    }
    if(slideIndex >= 4){
        slideIndex = 1
    }
    return slideIndex
}


let slides = document.querySelectorAll('.slide')
let dots = document.querySelectorAll('.current-slide')

changeSlides(slideIndex)

function changeSlides(slideIndex){

    for(let i = 0; i<slides.length; i++){
        slides[i].style.display = 'none'
    }

    for(let i = 0; i<dots.length; i++){
        dots[i].classList.remove('active')
    }

    slides[slideIndex-1].style.display = 'block'
    dots[slideIndex-1].classList.add('active')
}

let nextBtn = document.querySelector('.next-btn')
let preventBtn = document.querySelector('.prevent-btn')
// mouse
nextBtn.addEventListener('click', ()=>{
    slideIndex++
    check()
    changeSlides(slideIndex)
})

preventBtn.addEventListener('click', ()=>{
    slideIndex--
    check()
    changeSlides(slideIndex)
})
// keyboard
document.addEventListener('keydown', (event)=>{
    if(event.key == 'ArrowRight'){
        slideIndex++
        check()
        changeSlides(slideIndex)
    }
})


document.addEventListener('keydown', (event)=>{
    if(event.key == 'ArrowLeft'){
        slideIndex--
        check()
        changeSlides(slideIndex)
    }
})

// dots

for(let i=0; i<dots.length; i++){
    dots[i].addEventListener('click',(event)=>{

        slideIndex = Number(event.target.getAttribute('data-index'))
        changeSlides(slideIndex)
        return slideIndex
    })
}
