import './styles/index.scss'
import App from './Classes/App'

const name = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const rewritePassword = document.getElementById('rewrite-password')


const login = document.getElementById('btn-sign-in')
login.addEventListener('click', function(ev){
  ev.preventDefault()
  App.createUser(name.value, email.value, password.value, rewritePassword.value)
})