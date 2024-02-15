const prices = {
    'landing-page': {
        pm: 700,
        design: 600,
        developer: 1200,
        qa: 500
    },
    'online-store': {
        pm: 1200,
        design: 900,
        developer: 2500,
        qa: 800,
    },
    'web-application': {
        pm: 2000,
        design:1100,
        developer:3000,
        qa: 1000,
    },
    'mobile-application': {
        pm: 3000,
        design: 1500,
        developer: 4000,
        qa: 1300,
    }
};

function getFromValue() {

    const projectType = document.querySelector('#project-type')

    const pmEl = document.querySelector ('#project-management')
    const designEl = document.querySelector ('#design')
    const developmentEl = document.querySelector ('#development')
    const qaEl = document.querySelector ('#qa')
     

    return {
        projectType: projectType.value,
        pm: pmEl.checked ,
        design: designEl.checked,
        developer: developmentEl.checked,
        qa: qaEl.checked,
    }
}

function calc(){
    const values = getFromValue()

    let totalPrice = 0

    const workTypes = prices[values.projectType]

    if (values.pm){
        totalPrice += workTypes.pm
    }

    if (values.design){
        totalPrice +=  workTypes.design
    }

    if (values.developer){
        totalPrice +=  workTypes.developer
    }

    if (values.qa){
        totalPrice +=  workTypes.qa
    } 

    const totalPriceEl = document.querySelector('#total-price')

    totalPriceEl.textContent = totalPrice
}


const formEl = document.querySelector('#project-price')

formEl.addEventListener('change', calc)

const modalEmail = document.querySelector('#modal-email') 
const modalEmail2 = document.querySelector('#successes-modal')


formEl.addEventListener('submit', function (){
    event.preventDefault()

    modalEmail.classList.add('modal-active')
    


})

const closeButton = document.querySelectorAll('.close-button')

closeButton.forEach(function(closeBtn){

    closeBtn.addEventListener('click',function(){
        modalEmail.classList.remove('modal-active')
        modalEmail2.classList.remove('modal-active')
    })

})

const modalEmailContainer = document.querySelector('#email-container')

modalEmailContainer.addEventListener('submit', function(event){
    event.preventDefault()

    const userEmail = document.querySelector('#user-email')

    if (userEmail.value) {

        
        const formData = new FormData(formEl)

        formData.append('Email',userEmail.value)

        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        }).
        then(function(){
            modalEmail.classList.remove('modal-active')
            modalEmail2.classList.add('modal-active')
        }).catch(() =>
        alert('Не удалось отправить форму'))
    }
    else {

        const inputContainer = document.querySelector('#email-input-container')

        inputContainer.classList.add('email-input-container-error')

    }
    
    
})