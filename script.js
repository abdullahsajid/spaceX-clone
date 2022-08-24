let ham = document.querySelector('.hamburger')
let counter1 = document.querySelector('.counter1')
let counter2 = document.querySelector('.counter2')
let counter3 = document.querySelector('.counter3')
let nav_scroll = document.querySelector('.nav-overlay')
let fade_up = document.querySelector('.section-second .first-sec-content h4')
document.body.classList.add('falcon9-body')
ham.addEventListener('click',navToggle)
document.addEventListener('scroll',pageUp)
document.addEventListener('scroll',nav_pageUp)
function navToggle() {
        let overlay = document.querySelector('.overlay')
        overlay.classList.toggle('overlay-menu')
        ham.classList.toggle('menu-ham')
        document.body.classList.toggle('stop-scroll')
}
function pageUp(){
    const windowScroll = window.scrollY
    if(windowScroll > 100){
        for(let i=0; i<4; i++){
        setTimeout(counterUp1,75);}
        for(let i=0; i<3; i++){
        setTimeout(counterUp2,75);}
        for(let i=0; i<2; i++){
        setTimeout(counterUp3,75);}
    }else if(windowScroll < 100){
        reset()
    }
}
function counterUp1(){
    counter1.innerHTML++
}
function counterUp2(){
    counter2.innerHTML++
}
function counterUp3(){
    counter3.innerHTML++
}
function reset(){
    counter1.innerHTML = 0
    counter2.innerHTML = 0
    counter3.innerHTML = 0
}
function nav_pageUp(){
    const windowScroll = window.scrollY
    if(windowScroll > 100){
        nav_scroll.classList.add('nav-overlay-scroll')
    }else if(windowScroll < 100){
        nav_scroll.classList.remove('nav-overlay-scroll')
    }
}