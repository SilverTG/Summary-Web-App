let next = document.getElementById('next')
let prev = document.getElementById('prev')

let slider = document.getElementById('slider')
let quiz = document.getElementById('quiz')
let resume = document.getElementById('resume')
let gallery = document.getElementById('gallery')
let parallax = document.getElementById('parallax')

let arr = [slider,quiz,resume,gallery,parallax]
let size = arr.length
console.log(size)

let cur =2

next.addEventListener('click',function()
{     
    let t = cur
    if(cur+1 > size-1) cur = 0 
    else cur++
    arr[cur].classList.remove('hidden')
    for(let i=0;i<size;i++){
    if (i!=cur) arr[i].classList.add('hidden')
    }
})
prev.addEventListener('click',function()
{   
    let t = cur
    if(cur-1 < 0) cur = size -1
    else cur--
    arr[cur].classList.remove('hidden')
    for(let i=0;i<size;i++){
        if (i!=cur) arr[i].classList.add('hidden')
        }
})