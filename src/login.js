import { getUsers, userList } from "./get.js"

const loginBtn = document.querySelector('#login-btn')

loginBtn.addEventListener('click', (ev) => {
    ev.preventDefault()
    console.log('Tentativa de login')

    const userTryingToLogin = {
        username: document.querySelector('#username').value,
        email: document.querySelector('#email').value,
        password: document.querySelector('#password').value
    }

    console.log(`${userTryingToLogin.username} está tentando entrar.`)
    validateLogin(userTryingToLogin)


})

function validateLogin(userTryingToLogin){
    const userExist = userList.find(user => user.username === userTryingToLogin.username)
    if(!userExist){
        console.log('Este username não está vinculado a nenhuma conta')
    }else if(!(userTryingToLogin.email === userExist.email)){
        console.log('Email inválido.')
    }else if(!(userTryingToLogin.password === userExist.password)){
        console.log('Senha incorreta')
    }else{
        console.log(`Login efetuado:\n`+
            `Username: ${userExist.username}\n`+
            `Email: ${userExist.email}\n`+
            `Password: ${userExist.password}\n`+
            `Aniversário: ${userExist.birth}`)
    }

    loggedUser()
}

function loggedUser() {
    window.location.href = 'home.html'
}


document.addEventListener('DOMContentLoaded', () => {
    getUsers()
})