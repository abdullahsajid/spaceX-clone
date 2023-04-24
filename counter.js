let counter1 = document.querySelector('.counter1')
let counter2 = document.querySelector('.counter2')
let counter3 = document.querySelector('.counter3')
document.addEventListener('scroll',pageUp)

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