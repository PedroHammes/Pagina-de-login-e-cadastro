import './styles/index.scss'
import App from './Classes/App.js'
import switchForm from './Functions/switchForm.js'

const name = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const rewritePassword = document.getElementById('rewrite-password')

const signUpForm = document.getElementById('sign-up-form')
const loginForm = document.getElementById('login-form')

switchForm(signUpForm, loginForm)

const registerBtn = document.getElementById('register-btn')
registerBtn.addEventListener('click', function(ev){
  ev.preventDefault()
  App.createUser(name.value, email.value, password.value, rewritePassword.value)
})

const loginBtn = document.getElementById('login-btn')
loginBtn.addEventListener('click', function(ev){
  ev.preventDefault()
  App.login(email.value, password.value)
})