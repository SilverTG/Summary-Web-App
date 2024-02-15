const quizData = [
    {
        question: 'Capital city of Ukraine is:',
        a:'Kharkiv',
        b:'Lviv',
        c:'Poltava',
        d:'Kyiv',
        correct: 'd'
    },
    {
        question:'2 + 2 is',
        a: '3',
        b: '4',
        c: '61',
        d: '12',
        correct: 'b'
    },
    {
        question:'Best programming language in 2021:',
        a: 'Python',
        b: 'Java',
        c: 'JavaScript',
        d: 'C#',
        correct: a
    },
    {
        question:'Where is VW company from?',
        a: 'Germany',
        b: 'France',
        c: 'USA',
        d: 'United Kingdom',
        correct: 'a'
    },
    {
        question:'Where are all the roads lead to?',
        a: 'Russia',
        b: 'Ukraine',
        c: 'Rome',
        d: 'Poland',
        correct: 'c'
    },
]


const quizContainer = document.getElementById('quiz_container')
const questionEl = document.getElementById('question')
const answersEls = document.querySelectorAll('.answer')

const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('btn')


let currentQuiz = 0
let score = 0

loadQuiz();

function loadQuiz(){
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerHTML = currentQuizData.question

    a_text.innerHTML = currentQuizData.a
    b_text.innerHTML = currentQuizData.b
    c_text.innerHTML = currentQuizData.c
    d_text.innerHTML = currentQuizData.d
} 

function getSelected(){
    
     let answer = undefined

     answersEls.forEach((answerEl) =>{
        if(answerEl.checked){
             answer =  answerEl.id
        }
        // else {
        //     alert('You need to answer the question before moving forward!')
        //     return
        // }
     })
      
     return answer
     
}

function deselectAnswers(){
    answersEls.forEach((answerEl) =>{
        answerEl.checked = false
    })
}


submitBtn.addEventListener('click',() =>{

    const answer = getSelected()


    if (answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
            currentQuiz++;
            if(currentQuiz < quizData.length){
                loadQuiz();
            }
            else {
                quizContainer.innerHTML = 
                `<h2>Congratulations! Correct answers: ${score}/ ${quizData.length-1}</h2>
                <button class='btn' onclick="location.reload()">Try Again</button>`
            }
        }
})


// script for start page

// const modal = document.getElementById('modal')
// const startBtn = document.getElementById('btnStart')
// function start(){
//     startBtn.addEventListener('click',() =>{
//         modal.classList.remove('modal-active')
//     })

// }
