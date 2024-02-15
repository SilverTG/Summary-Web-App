let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let MountainF = document.getElementById('mountainF')
let mountainB = document.getElementById('mountainB')
let text = document.getElementById('text')
let btn = document.getElementById('btn')
let sec = document.getElementById('sec')
let header = document.querySelector('header')

window.addEventListener('scroll', function(){
    let value = window.scrollY
    stars.style.left = value * 0.25 + 'px'
    moon.style.top = value * 1.5 + 'px'
    mountainB.style.top = value * 0.5 + 'px'
    text.style.marginRight = value * 2.4 + 'px' 
    // text.style.marginTop = value + 'px'
    btn.style.marginTop = value * 2 + 'px'  
    header.style.top = value +'px'   
})