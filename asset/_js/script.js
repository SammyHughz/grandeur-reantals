let contentHandler = document.querySelector('#content-handler')
const loginBtn = document.querySelector('#login')
const signUpBtn = document.querySelector('#sign-up')
let middleDiv = document.querySelector('#middle-div')
let backBtn = document.querySelectorAll('.bka')[0]
let backBtn2 = document.querySelectorAll('.bka')[1]
let loginForm = document.querySelectorAll('form')[0]
let signForm = document.querySelectorAll('form')[1]

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