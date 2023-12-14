let userList = []
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
    validateLogin(userList, userTryingToLogin)

})

async function getUsers() {
    const response = await fetch('http://localhost:3000/users')
    const users = await response.json()
    users.forEach(user => {
        userList.push(user)
    });
    console.log(userList)
}

function validateLogin(userList, userTryingToLogin){
    if(!userList.find(user => user.username === userTryingToLogin.username)){
        console.log('Este username não está vinculado a nenhuma conta')
    }else{
        if(!userList.find(user => user.email === userTryingToLogin.email)){
            console.log(`Username encontrado, mas este email não está vinculado a nenhuma conta`)
        }else{
            console.log(`Username e email encontrado, testando a senha`)
        }
    }
    
}


document.addEventListener('DOMContentLoaded', () => {
    getUsers()
})