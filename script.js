let ham = document.querySelector('.hamburger')
let nav_scroll = document.querySelector('.nav-overlay')
let fade_up = document.querySelector('.section-second .first-sec-content h4')
document.body.classList.add('falcon9-body')
ham.addEventListener('click',navToggle)
document.addEventListener('scroll',nav_pageUp)

function navToggle() {
        let overlay = document.querySelector('.overlay')
        overlay.classList.toggle('overlay-menu')
        document.querySelector(".shop-menu").classList.toggle("shop-block")
        ham.classList.toggle('menu-ham')
        document.body.classList.toggle('stop-scroll')
}


function nav_pageUp(){
    const windowScroll = window.scrollY
    if(windowScroll > 100){
        nav_scroll.classList.add('nav-overlay-scroll')
    }else if(windowScroll < 100){
        nav_scroll.classList.remove('nav-overlay-scroll')
    }
}