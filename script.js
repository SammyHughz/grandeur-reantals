let contentHandler = document.querySelector('#content-handler')
const loginBtn = document.querySelector('#login')
const signUpBtn = document.querySelector('#sign-up')
let middleDiv = document.querySelector('#middle-div')
let backBtn = document.querySelectorAll('.bka')[0]
let backBtn2 = document.querySelectorAll('.bka')[1]
let loginForm = document.querySelectorAll('form')[0]
let signForm = document.querySelectorAll('form')[1]
let profileh1 = document.querySelector('#profile h1')

let loginEmail = document.querySelector('#emailing')
let loginPassword = document.querySelector('#confirming')

let mainDiv = document.querySelectorAll('main')[0]
let profile = document.querySelector('#profile')
let container = document.querySelector('#container')

let highlit = document.querySelector('#main')

let houses = document.querySelectorAll('.individual-houses')

let goBack = document.querySelector('#go-back')
let choices = document.querySelectorAll('.interested')
let desires = document.querySelectorAll('.desired')
let popUp = document.querySelector('#pop-up')
let okBtn = document.querySelector('#ok')

let email = 'sam'
let password = '123'
console.log(typeof(password));

loginBtn.addEventListener('click', () => {
    middleDiv.style.display = 'none'
    loginForm.style.display = 'block'
    signForm.style.display = 'none'
})
backBtn.addEventListener('click', () => {
    middleDiv.style.display = 'block'
    loginForm.style.display = 'none'
    signForm.style.display = 'none'
})
backBtn2.addEventListener('click', () => {
    middleDiv.style.display = 'block'
    loginForm.style.display = 'none'
    signForm.style.display = 'none'
})
signUpBtn.addEventListener('click', () => {
    middleDiv.style.display = 'none'
    loginForm.style.display = 'none'
    signForm.style.display = 'block'
})
window.addEventListener('load', () => {
    profileh1.style.transition = '1s'
    profileh1.style.scale = '1'
})

function login() {
    if (loginEmail.value == email && loginPassword.value == password) {
        container.style.display = 'none'
        profile.style.display = 'block'
        
        console.log('hello World');
    }else{
        alert('Login Failed')
        container.style.display = 'block'
        profile.style.display = 'none'
    }
}
houses.forEach(element => {
    element.addEventListener('click', () => {
        profile.style.display = 'none'
        highlit.style.display = 'block'
    })
});
goBack.addEventListener('click', () => {
    container.style.display = 'none'
    profile.style.display = 'block '
    popUp.style.display = 'none'
})
choices.forEach(element => {
    element.addEventListener('click', func => {
        popUp.style.display = 'block'
    })
})
okBtn.addEventListener('click', func => {
    popUp.style.display = 'none'
})
