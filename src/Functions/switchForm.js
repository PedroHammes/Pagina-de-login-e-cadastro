

const name = document.getElementById('name')
const labelName = document.getElementById('label-name')
const rewritePassword = document.getElementById('rewrite-password')
const labelRewritePassword = document.getElementById('label-rewrite-password')
const loginBtn = document.getElementById('login-btn')
const registerBtn = document.getElementById('register-btn')


export default function switchForm(signUp, login){
  signUp.addEventListener('click', function(ev){
    ev.preventDefault()
    signUp.classList.toggle('form-selected')
    login.classList.toggle('form-selected')
    name.style.display = ""
    labelName.style.display = ""
    rewritePassword.style.display = ""
    labelRewritePassword.style.display = ""
    loginBtn.style.display = "none"
    registerBtn.style.display = ""
  })

  login.addEventListener('click', function(ev){
    ev.preventDefault()
    signUp.classList.toggle('form-selected')
    login.classList.toggle('form-selected')
    name.style.display = "none"
    labelName.style.display = "none"
    rewritePassword.style.display = "none"
    labelRewritePassword.style.display = "none"
    registerBtn.style.display = "none"
    loginBtn.style.display = ""

  })
}